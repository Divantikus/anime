import { useRef } from 'react';

type TUseDeb = (
    func: (...args: any[]) => void,
    del: number,
    ...arg: unknown[]
) => void;

export const useDebounce = () => {
    const delay = useRef<ReturnType<typeof setTimeout>>();
    const returnFn: TUseDeb = (func, del, ...arg) => {
        clearTimeout(delay.current);
        delay.current = setTimeout(() => {
            func(...arg);
        }, del);
    };
    return returnFn;
};
