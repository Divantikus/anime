import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LoginData } from 'src/services/types/authDataTypes.ts';
import { SubmitBtn } from './submit-btn/SubmitBtn';
import { userNameSett } from 'src/components/registration-form/RegistrationVar.ts';
import { FormProvider } from 'react-hook-form';
import { InputPassword } from './input-fields/input-password/InputPassword';
import { useMyFormProv } from 'src/hooks/useMyFormProv.ts';
import { TemplateInput } from 'src/components/login-form/input-fields/template-input/TemplateInput.tsx';
import { useLoginMutation } from 'src/hooks/useLoginMutation.ts';
import style from './LoginForm.module.scss';

export const LoginForm: FC = () => {
    const {
        methods,
        handleSubmit,
        formState: { isValid },
        setError,
    } = useMyFormProv<LoginData>();
    const { mutate } = useLoginMutation(setError);

    const submitFn = (data: LoginData) => mutate(data);

    return (
        <FormProvider {...methods}>
            <section className={style.flexContainer}>
                <form className={style.form} onSubmit={handleSubmit(submitFn)}>
                    <h1 className={style.title}>Login</h1>
                    <TemplateInput settings={userNameSett} />
                    <InputPassword />
                    <Link to="/registration" className={style.link}>
                        Create new account
                    </Link>
                    <SubmitBtn isValid={isValid} />
                </form>
            </section>
        </FormProvider>
    );
};
