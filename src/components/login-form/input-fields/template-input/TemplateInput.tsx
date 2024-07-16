import { RegisterOptions, useFormContext } from 'react-hook-form';
import { FC, HTMLInputTypeAttribute } from 'react';
import style from '../InputStyles.module.scss';

export interface TemplateInputReg {
    username: string;
    password: string;
    email: string;
}

export interface TemplateInputParams {
    img: string;
    type: HTMLInputTypeAttribute;
    inputName: 'username' | 'password' | 'email';
    label: string;
    inputSettings: RegisterOptions<TemplateInputReg> | undefined;
}

interface TemplateInputProps {
    settings: TemplateInputParams;
}

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
                    The email address is incorrect
                </p>
            )}
        </>
    );
};
