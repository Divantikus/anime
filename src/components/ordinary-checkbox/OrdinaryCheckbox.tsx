import style from './OrdinaryCheckbox.module.scss'
import checkMark from 'public/rel/checkmark.svg'
import {useFormContext} from "react-hook-form";
import {FC, useRef} from "react";

interface OrdinaryCheckboxProps{
    checkName: string
}

export const OrdinaryCheckbox: FC<OrdinaryCheckboxProps> = ({checkName}) => {

    const {register} = useFormContext()
    const imgRef = useRef<HTMLImageElement>(null)
    
    const toggle = () => {
        if(!imgRef.current) return
        if(imgRef.current.style.display){
            console.log(imgRef.current.style.display)
            imgRef.current.style.removeProperty("display")
            return
        }
        imgRef.current.style.display = "block"
    }

    return (
        <>
            <label htmlFor={'isOver'} className={style.label} onClick={toggle}>
                <div className={style.fakeChb}>
                    <img src={checkMark} alt="галочка" className={style.img} ref={imgRef}/>
                </div>
                <p className={style.text}>Релиз завершен</p>
            </label>
            <input type="checkbox" id={checkName} style={{display: "none"}} {...register(checkName)}/>
        </>
    )
}