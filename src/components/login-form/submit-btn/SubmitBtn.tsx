import { SubmitBtnType } from "./ButtonType";
import { FC } from "react";
import style from "./SubmitBtn.module.scss";

export const SubmitBtn: FC<SubmitBtnType> = ({ isValid }) => {

  return (
    <>
      <button
        className={
          isValid ? style.submitBtn : `${style.submitBtn} ${style.submitBtnDis}`
        }
        disabled={!isValid}
      >
        Submit
      </button>
    </>
  );
};
