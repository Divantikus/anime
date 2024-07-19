import style from './LoadingVideo.module.scss';

export const LoadingVideo = () => {
    return (
        <div className={style.loadingContainer}>
            <div className={style.ldsRipple}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
