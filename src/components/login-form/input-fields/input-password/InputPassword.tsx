import { settingsPassword } from '../../LoginVar';
import { useFormContext } from 'react-hook-form';
import { FC, useState } from 'react';
import passwordIcon from 'public/login-img/password-lock.svg';
import style from '../InputStyles.module.scss';

export const InputPassword: FC = () => {
    const {
        formState: { errors },
        register,
    } = useFormContext<{ password: string }>();
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    return (
        <>
            <label htmlFor="userPassword" className={style.lable}>
                Password
            </label>
            <div
                className={
                    !errors?.password
                        ? style.inputContainer
                        : `${style.inputContainer} ${style.inputContainerError}`
                }
            >
                <input
                    type={passwordIsVisible ? 'text' : 'password'}
                    className={style.input}
                    id="userPassword"
                    {...register('password', settingsPassword)}
                />
                <button
                    className={style.showPasswordBtn}
                    onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                    type="button"
                >
                    <img
                        src={passwordIcon}
                        alt="password icon"
                        className={style.img}
                    />
                </button>
            </div>
            {errors.password?.type === 'required' && (
                <p className={style.errorMess}>This field is required</p>
            )}
            {errors.password?.type === 'minLength' && (
                <p className={style.errorMess}>
                    The password must be longer than 5 characters
                </p>
            )}
            {errors.password?.type && (
                <p className={style.errorMess}>{errors.password.message}</p>
            )}
        </>
    );
};
