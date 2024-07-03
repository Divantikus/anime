import { useFormContext } from "react-hook-form";
import style from "./RegistrationBtn.module.scss";
import { FC } from "react";
export const RegistrationBtn: FC = () => {
  const {
    formState: { isValid },
  } = useFormContext();
  return (
    <>
      <button className={style.submitBtn} disabled={!isValid} type="submit">
        Register
      </button>
    </>
  );
};
