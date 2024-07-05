import { useFormContext } from "react-hook-form";
import { IRegistration } from "../RegistTypes";
import { useState } from "react";
import passwordIcon from "public/login-img/password-lock.svg";
import style from "src/components/login-form/input-fields/InputStyles.module.scss";

export const PasswordVerification = () => {

  const {
    formState: { errors },
    register,
    getValues,
  } = useFormContext<IRegistration>();

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  return (
    <>
      <label htmlFor="userPassword" className={style.lable}>
        Password verification
      </label>
      <div
        className={
          !errors?.passwordConfirmation
            ? style.inputContainer
            : `${style.inputContainer} ${style.inputContainerError}`
        }
      >
        <input
          type={passwordIsVisible ? "text" : "password"}
          className={style.input}
          id="verefUserPassword"
          {...register("passwordConfirmation", {
            required: true,
            validate: () => {
              return (
                getValues("password") === getValues("passwordConfirmation")
              );
            },
          })}
        />
        <button
          className={style.showPasswordBtn}
          onClick={() => setPasswordIsVisible(!passwordIsVisible)}
        >
          <img src={passwordIcon} alt="password icon" className={style.img} />
        </button>
      </div>
      {errors.passwordConfirmation?.type === "validate" ? (
        <p className={style.errorMess}>Passwords don't match</p>
      ) : errors.passwordConfirmation?.type ? (
        <p className={style.errorMess}>This field is required</p>
      ) : null}
    </>
  );
};
