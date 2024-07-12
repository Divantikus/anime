import { AnimeDescription } from 'src/components/AnimeDescription/AnimeDescription.tsx';
import { useRef, useState } from 'react';
import { decodingJpgImg } from 'src/components/pages/MainPage.tsx';
import { createButtons } from 'src/functions/createButtons.tsx';
import { useQueryWatch } from 'src/hooks/useQueryWatch.ts';
import { useParams } from 'react-router-dom';
import { Loading } from 'src/load/Loading.tsx';
import style from './styles/WatchPage.module.scss';
import vk from 'public/watch/vk.jpg';
import tg from 'public/watch/tg.jpg';
import ds from 'public/watch/ds.jpg';

export const WatchPage = () => {
    const { id } = useParams();
    const video = useRef<HTMLVideoElement>(null);
    const { data, isLoading, isError } = useQueryWatch(id ? +id : NaN);
    const [currentEpisode, setCurrentEpisode] = useState<number | null>(null);

    if (data === 'incorrect data' || isError || !data) {
        return <div>Error (</div>;
    }

    if (isLoading) {
        return <Loading height={15} />;
    }

    return (
        <section>
            <div className={style.watch}>
                <div className={style.wrap}>
                    <AnimeDescription description={data} />
                    <img
                        src={decodingJpgImg + data.image_data}
                        alt={data.title}
                        className={style.img}
                    />
                </div>
                {currentEpisode && (
                    <video
                        ref={video}
                        controls={true}
                        style={{ width: '100%', height: 500 }}
                    >
                        <source
                            src={`http://localhost:8000/release/watch/${id}/${currentEpisode}`}
                            style={{ width: '100%', height: 500 }}
                        />
                    </video>
                )}
            </div>
            <div className={style.episodes}>
                {createButtons(data.episodes_number, setCurrentEpisode)}
            </div>
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
        </section>
    );
};
