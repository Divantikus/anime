import { useFormContext } from "react-hook-form";
import style from "./RegistrationCheckbox.module.scss";
export const RegistrationCheckbox = () => {
  const { register } = useFormContext();
  return (
    <>
      <label htmlFor="checkBox" className={style.conditions}>
        I agree to the terms of use
        <input type="checkbox" {...register("approval", { required: true })} />
      </label>
    </>
  );
};
