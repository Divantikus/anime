import { FC } from "react";
import { InputEmail } from "../login-form/input-fields/input-email/InputEmail";
import {useMyFormProv} from "src/hooks/useMyFormProv.ts";
import { FormProvider } from "react-hook-form";
import { IRegistration } from "./RegistTypes";
import { InputPassword } from "../login-form/input-fields/input-password/InputPassword";
import { RegistrationBtn } from "./registration-btn/RegistrationBtn";
import { PasswordVerification } from "./password-verification/PasswordVerification";
import { RegistrationCheckbox } from "./registration-checkbox/RegistrationCheckbox";
import { useRegistrationMutation } from "src/hooks/useRegistrationMutation";
import style from "../login-form/LoginForm.module.scss";

export const Registration: FC = () => {

  const { methods, handleSubmit, setError } = useMyFormProv<IRegistration>();
  const { mutate } = useRegistrationMutation(setError);

  const submit = async (event: IRegistration) => {
    mutate({
      username: event.username,
      password: event.password,
      approval: event.approval,
      passwordConfirmation: event.passwordConfirmation
    });
  };

  return (
    <FormProvider {...methods}>
      <section className={style.mainRegForm}>
        <form onSubmit={handleSubmit(submit)} className={style.form}>
          <h1 className={style.title}>Registration</h1>
          <InputEmail />
          <InputPassword />
          <PasswordVerification />
          <RegistrationCheckbox />
          <RegistrationBtn />
        </form>
      </section>
    </FormProvider>
  );
};
