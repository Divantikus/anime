import { useFormContext } from "react-hook-form";
import { settingsEmail } from "../../LoginVar";
import {LoginData} from "src/services/types/authDataTypes.ts";
import { FC } from "react";
import mailImg from "public/login-img/email-icon.svg";
import style from "../InputStyles.module.scss";

export const InputEmail: FC = () => {

    const {
        formState: { errors },
        register,
    } = useFormContext<LoginData>();

    return (
        <>
            <label htmlFor="userName" className={style.lable}>
                Email address
            </label>
            <div
                className={
                    !errors?.username
                        ? style.inputContainer
                        : `${style.inputContainer} ${style.inputContainerError}`
                }
            >
                <input
                    type="text"
                    id="userName"
                    className={style.input}
                    {...register("username", settingsEmail)}
                />
                <img src={mailImg} alt="email icon" className={style.img} />
            </div>
            {errors.username?.type === "required" && <p className={style.errorMess}>Required</p>}
        </>
    );
};
