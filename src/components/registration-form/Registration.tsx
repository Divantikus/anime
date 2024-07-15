import { FC, FormEvent } from 'react';
import { FormProvider } from 'react-hook-form';
import { IRegistration } from './RegistTypes';
import { useMyFormProv } from 'src/hooks/useMyFormProv.ts';
import { settingsEmail } from '../login-form/LoginVar';
import { InputPassword } from '../login-form/input-fields/input-password/InputPassword';
import { RegistrationBtn } from './registration-btn/RegistrationBtn';
import { PasswordVerification } from './password-verification/PasswordVerification';
import { RegistrationCheckbox } from './registration-checkbox/RegistrationCheckbox';
import { useRegistrationMutation } from 'src/hooks/useRegistrationMutation';
import {
    TemplateInput,
    TemplateInputParams,
} from '../login-form/input-fields/template-input/TemplateInput';
import userIcon from 'public/registration-img/user.svg';
import emailIcon from 'public/login-img/email-icon.svg';
import style from '../login-form/LoginForm.module.scss';

export const usernameSett: TemplateInputParams = {
    inputName: 'username',
    label: 'Username',
    type: 'text',
    img: userIcon,
    inputSettings: { required: true },
};

export const emailSett: TemplateInputParams = {
    inputName: 'email',
    label: 'Email',
    type: 'email',
    img: emailIcon,
    inputSettings: settingsEmail,
};

export const Registration: FC = () => {
    const { methods, handleSubmit, setError } = useMyFormProv<IRegistration>();
    const { mutate } = useRegistrationMutation(setError);

    const submit = async (event: IRegistration) => {
        mutate({
            username: event.username,
            password: event.password,
            email: event.email,
        });
    };

    return (
        <FormProvider {...methods}>
            <section className={style.mainRegForm}>
                <form onSubmit={handleSubmit(submit)} className={style.form}>
                    <h1 className={style.title}>Registration</h1>
                    <TemplateInput settings={usernameSett} />
                    <TemplateInput settings={emailSett} />
                    <InputPassword />
                    <PasswordVerification />
                    <RegistrationCheckbox />
                    <RegistrationBtn />
                </form>
            </section>
        </FormProvider>
    );
};
