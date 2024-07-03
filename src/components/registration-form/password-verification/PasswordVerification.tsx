import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { IRegistration } from "../RegistTypes";
import passwordIcon from "../../../../../anime/public/login-img/password-icon.svg";
import style from "src/components/login-form/input-fields/InputStyles.module.scss";
export const PasswordVerification = () => {
  const {
    formState: { errors },
    register,
    getValues,
  } = useFormContext<IRegistration>();
  const [passwordIsVisible, setasswordIsVisible] = useState(false);
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
          onClick={() => setasswordIsVisible(!passwordIsVisible)}
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
