import style from './CustomCheckbox.module.scss';
import { FC, useRef } from 'react';
import { useFormContext } from 'react-hook-form';

interface CustomCheckboxProps {
    leftSideText: string;
    rightSideText: string;
    checkName: string;
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
    leftSideText,
    rightSideText,
    checkName,
}) => {
    const { register } = useFormContext();
    const point = useRef<HTMLDivElement>(null);

    const toggle = () => {
        if (!point.current) return;

        if (point.current.style.right) {
            point.current.style.removeProperty('right');
            point.current.style.left = '-1px';
            return;
        }
        point.current.style.removeProperty('left');
        point.current.style.right = '-1px';
    };

    return (
        <>
            <label className={style.new} onClick={toggle} htmlFor={'isNew'}>
                <div className={style.point} ref={point} style={{ right: 0 }}>
                    <div className={style.inPoint}>
                        <div className={style.leftText}>{leftSideText}</div>
                        <div className={style.rightText}>{rightSideText}</div>
                    </div>
                </div>
            </label>
            <input
                type="checkbox"
                id={'isNew'}
                {...register(checkName)}
                className={style.check}
            />
        </>
    );
};
