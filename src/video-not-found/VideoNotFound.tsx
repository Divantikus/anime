import notFoundImg from 'public/video-not-found/octagon-alert.svg';
import style from './VideoNotFound.module.scss';

export const VideoNotFound = () => {
    return (
        <div className={style.notFoundContainer}>
            <p className={style.paragraph}>
                На данный момент серии отсутствуют
            </p>
            <p className={style.paragraph}>Приносим свои извинения</p>
            <img src={notFoundImg} alt="not found img" className={style.img} />
        </div>
    );
};
