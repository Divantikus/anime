import { FC } from "react";
import {Link} from "react-router-dom";
import {LoginData} from "src/services/types/authDataTypes.ts";
import { SubmitBtn } from "./submit-btn/SubmitBtn";
import { InputEmail } from "./input-fields/input-email/InputEmail";
import {useMyFormProv} from "src/hooks/useMyFormProv.ts";
import { FormProvider } from "react-hook-form";
import { InputPassword } from "./input-fields/input-password/InputPassword";
import {useLoginMutation} from "src/hooks/useLoginMutation.ts";
import style from "./LoginForm.module.scss";

export const LoginForm: FC = () => {

  const { methods, handleSubmit, formState: {isValid} } = useMyFormProv<LoginData>();
  const {mutate} = useLoginMutation()

  const submitFn = (data: LoginData) => mutate(data)


  return (
    <FormProvider {...methods}>
      <section className={style.flexContainer}>
        <form className={style.form} onSubmit={handleSubmit(submitFn)}>
          <h1 className={style.title}>Login</h1>
          <InputEmail />
          <InputPassword />
          <Link to="/registration" className={style.link}>
            Create new account
          </Link>
          <SubmitBtn isValid={isValid}/>
        </form>
      </section>
    </FormProvider>
  );
};
