import { AnimeDescription } from 'src/components/AnimeDescription/AnimeDescription.tsx';
import { useRef, useState } from 'react';
import { SocialNetworks } from 'src/components/social-networks/SocialNetworks.tsx';
import { createButtons } from 'src/functions/createButtons.tsx';
import { useQueryWatch } from 'src/hooks/useQueryWatch.ts';
import { useParams } from 'react-router-dom';
import { Loading } from 'src/load/Loading.tsx';
import style from './styles/WatchPage.module.scss';

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

    console.log(data);

    return (
        <section>
            <div className={style.watch}>
                <div className={style.wrap}>
                    <AnimeDescription description={data} />
                    <img
                        src={data.image_data}
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
            <SocialNetworks />
        </section>
    );
};
