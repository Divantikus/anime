import { PageSelectionButtonsProps } from 'src/components/page-selection-buttons/PageSelectionButtonsTypes.ts';
import { FC } from 'react';
import style from './PageSelectionButtons.module.scss';

export const PageSelectionButtons: FC<PageSelectionButtonsProps> = ({
    setCurrentPage,
    currentPage,
    data,
}) => {
    return (
        <div className={style.buttonContainer}>
            <button
                form="tryForm"
                onClick={() => {
                    setCurrentPage(currentPage - 1);
                }}
                className={style.button}
                style={{
                    display: currentPage - 1 > 0 ? 'inline-block' : 'none',
                }}
            >
                Сюда
            </button>
            <button
                className={style.button}
                form="tryForm"
                style={{
                    display: currentPage - 3 > 0 ? 'inline-block' : 'none',
                }}
                onClick={() => {
                    setCurrentPage(currentPage - 3);
                }}
            >
                {currentPage - 3}
            </button>
            <button
                className={style.button}
                form="tryForm"
                style={{
                    display: currentPage - 2 > 0 ? 'inline-block' : 'none',
                }}
                onClick={() => {
                    setCurrentPage(currentPage - 2);
                }}
            >
                {currentPage - 2}
            </button>
            <button
                className={style.button}
                form="tryForm"
                style={{
                    display: currentPage - 1 > 0 ? 'inline-block' : 'none',
                }}
                onClick={() => {
                    setCurrentPage(currentPage - 1);
                }}
            >
                {currentPage - 1}
            </button>
            {currentPage && (
                <button
                    className={`${style.button} ${style.activeBtn}`}
                    onClick={() => window.scroll(0, 0)}
                >
                    {currentPage}
                </button>
            )}
            <button
                className={style.button}
                form="tryForm"
                style={{
                    display:
                        currentPage + 1 <= data.pages ? 'inline-block' : 'none',
                }}
                onClick={() => {
                    setCurrentPage(currentPage + 1);
                }}
            >
                {currentPage + 1}
            </button>
            <button
                className={style.button}
                form="tryForm"
                style={{
                    display:
                        currentPage + 2 <= data.pages ? 'inline-block' : 'none',
                }}
                onClick={() => {
                    setCurrentPage(currentPage + 2);
                }}
            >
                {currentPage + 2}
            </button>
            <button
                className={style.button}
                form="tryForm"
                style={{
                    display:
                        currentPage + 3 <= data.pages ? 'inline-block' : 'none',
                }}
                onClick={() => {
                    setCurrentPage(currentPage + 3);
                }}
            >
                {currentPage + 3}
            </button>
            <button
                form="tryForm"
                onClick={() => {
                    setCurrentPage(currentPage + 1);
                }}
                className={style.button}
                style={{
                    display:
                        currentPage + 1 <= data.pages ? 'inline-block' : 'none',
                }}
            >
                Туда
            </button>
        </div>
    );
};
