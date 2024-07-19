import style from './Loading.module.scss'
import {FC} from "react";

export const Loading: FC<{height: number}> = ({height}) => {
    return (
        <div className={style.loadingWrap} style={{height: height + "%"}}>
            <span className={style.loader}></span>
        </div>
    )
}
