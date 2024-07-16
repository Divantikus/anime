import style from 'src/components/pages/styles/WatchPage.module.scss';
import vk from 'public/watch/vk.jpg';
import tg from 'public/watch/tg.jpg';
import ds from 'public/watch/ds.jpg';

export const SocialNetworks = () => {
    return (
        <div className={style.socialNetwork}>
            <a href="#" className={style.link}>
                <img src={vk} alt="vk" className={style.networkImg} />
            </a>
            <a href="#" className={style.link}>
                <img src={tg} alt="tg" className={style.networkImg} />
            </a>
            <a href="#" className={style.link}>
                <img src={ds} alt="ds" className={style.networkImg} />
            </a>
        </div>
    );
};
