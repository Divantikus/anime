import { useLoaderData, useParams } from 'react-router-dom';
import { useMutationVideo } from 'src/hooks/useMutationVideo.ts';
import { AnimeDescription } from 'src/components/AnimeDescription/AnimeDescription.tsx';
import { EpisodeButtons } from 'src/components/episode-buttons/EpisodeButtons.tsx';
import { SocialNetworks } from 'src/components/social-networks/SocialNetworks.tsx';
import { LoaderDataType } from 'src/components/pages/types/WatchPageTypes.ts';
import { VideoNotFound } from 'src/video-not-found/VideoNotFound.tsx';
import { LoadingVideo } from 'src/components/loading/loading-video/LoadingVideo.tsx';
import style from './styles/WatchPage.module.scss';
// todo убрать эту хуйню

export const WatchPage = () => {
    const data = useLoaderData() as LoaderDataType;
    // const { data, isLoading, isError } = useQueryWatch(slug);
    const {
        data: videoData,
        mutate,
        isLoading: videoIsLoading,
    } = useMutationVideo();
    console.log(data);

    if (data === 'incorrect data') {
        return <div>Error (</div>;
    }

    if (!data) return <>Loading...</>;

    // if (isLoading) {
    //     return <Loading height={15} />;
    // }

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
