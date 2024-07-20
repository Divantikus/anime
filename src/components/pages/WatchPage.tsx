import { useMutationVideo } from 'src/hooks/useMutationVideo.ts';
import { AnimeDescription } from 'src/components/AnimeDescription/AnimeDescription.tsx';
import { EpisodeButtons } from 'src/components/episode-buttons/EpisodeButtons.tsx';
import { SocialNetworks } from 'src/components/social-networks/SocialNetworks.tsx';
import { VideoNotFound } from 'src/video-not-found/VideoNotFound.tsx';
import { useQueryWatch } from 'src/hooks/useQueryWatch.ts';
import { useParams } from 'react-router-dom';
import { Loading } from 'src/components/loading/Loading.tsx';
import style from './styles/WatchPage.module.scss';
import { LoadingVideo } from 'src/components/loading/loading-video/LoadingVideo.tsx';

export const WatchPage = () => {
    const { slug } = useParams();
    const { data, isLoading, isError } = useQueryWatch(slug);
    const {
        data: videoData,
        mutate,
        isLoading: videoIsLoading,
    } = useMutationVideo();

    if (data === 'incorrect data' || isError) {
        return <div>Error (</div>;
    }

    if (!data) return <></>;

    if (isLoading) {
        return <Loading height={15} />;
    }

    return (
        <section>
            <div className={style.watch}>
                <div className={style.wrap}>
                    <AnimeDescription description={data} />
                    <img
                        alt={data.title}
                        className={style.img}
                        src={data.image_url}
                    />
                </div>
                <div className={style.videoContainer}>
                    <EpisodeButtons mutate={mutate} id={data.id} data={data} />
                    {data.episode_url && (
                        <video controls={true} className={style.video}>
                            <source
                                className={style.videotttt}
                                src={videoData?.episode_url || data.episode_url}
                                type={videoData?.content_type}
                                style={{ width: '100%', height: 500 }}
                            />
                        </video>
                    )}
                </div>
                {videoIsLoading && <LoadingVideo />}
                {!data.episode_url && !videoIsLoading && <VideoNotFound />}
            </div>
            <SocialNetworks />
        </section>
    );
};
