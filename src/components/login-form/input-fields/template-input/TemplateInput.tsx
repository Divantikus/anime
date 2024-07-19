import { useFormContext } from 'react-hook-form';
import { FC } from 'react';
import style from '../InputStyles.module.scss';
import {
    TemplateInputProps,
    TemplateInputReg,
} from 'src/components/login-form/input-fields/template-input/TemplateInputTypes.ts';

export const TemplateInput: FC<TemplateInputProps> = ({ settings }) => {
    const { img, inputName, type, label, inputSettings } = settings;

    const {
        formState: { errors },
        register,
    } = useFormContext<TemplateInputReg>();

    return (
        <>
            <label htmlFor={inputName} className={style.lable}>
                {label}
            </label>
            <div
                className={
                    !errors[inputName]
                        ? style.inputContainer
                        : `${style.inputContainer} ${style.inputContainerError}`
                }
            >
                <input
                    type={type}
                    id={inputName}
                    className={style.input}
                    {...register(inputName, inputSettings)}
                />
                <img src={img} alt="icon" className={style.img} />
            </div>
            {errors[inputName]?.type === 'required' && (
                <p className={style.errorMess}>Required</p>
            )}
            {errors[inputName]?.type === 'pattern' && (
                <p className={style.errorMess}>
                    {inputName === 'username' &&
                        'Invalid username: Username must consist of letters, numbers and underscore'}
                    {inputName === 'email' && 'The email address is incorrect'}
                </p>
            )}
            {errors[inputName]?.type && (
                <p className={style.errorMess}>{errors[inputName]?.message}</p>
            )}
        </>
    );
};
