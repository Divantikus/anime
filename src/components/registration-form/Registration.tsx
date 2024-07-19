import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { IRegistration } from './RegistTypes';
import { useMyFormProv } from 'src/hooks/useMyFormProv.ts';
import { InputPassword } from '../login-form/input-fields/input-password/InputPassword';
import { TemplateInput } from '../login-form/input-fields/template-input/TemplateInput';
import { RegistrationBtn } from './registration-btn/RegistrationBtn';
import { PasswordVerification } from './password-verification/PasswordVerification';
import { RegistrationCheckbox } from './registration-checkbox/RegistrationCheckbox';
import { useRegistrationMutation } from 'src/hooks/useRegistrationMutation';
import {
    emailSett,
    userNameSett,
} from 'src/components/registration-form/RegistrationVar.ts';
import style from '../login-form/LoginForm.module.scss';

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
                    <TemplateInput settings={userNameSett} />
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
