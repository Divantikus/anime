import { FullDescriptionAnime } from 'src/services/types/DataFromServerTypes.ts';
import { Await, useLoaderData } from 'react-router-dom';
import { useMutationVideo } from 'src/hooks/useMutationVideo.ts';
import { AnimeDescription } from 'src/components/AnimeDescription/AnimeDescription.tsx';
import { EpisodeButtons } from 'src/components/episode-buttons/EpisodeButtons.tsx';
import { SocialNetworks } from 'src/components/social-networks/SocialNetworks.tsx';
import { LoaderDataType } from 'src/components/pages/types/WatchPageTypes.ts';
import { VideoNotFound } from 'src/video-not-found/VideoNotFound.tsx';
import { AxiosResponse } from 'axios';
import { LoadingVideo } from 'src/components/loading/loading-video/LoadingVideo.tsx';
import { Suspense } from 'react';
import { Loading } from 'src/components/loading/Loading.tsx';
import style from './styles/WatchPage.module.scss';

export const WatchPage = () => {
    const { axiosData } = useLoaderData() as LoaderDataType;
    const {
        data: videoData,
        mutate,
        isLoading: videoIsLoading,
    } = useMutationVideo();

    return (
        <Suspense fallback={<Loading height={20} />}>
            <Await
                resolve={axiosData}
                errorElement={<div>Error (</div>}
                children={(axiosData: AxiosResponse<FullDescriptionAnime>) => {
                    const { data } = axiosData;
                    const currentEpisodeUrl =
                        videoData?.episode_url || data.episode_url;
                    return (
                        <section>
                            <div className={style.watch}>
                                <div className={style.wrap}>
                                    <AnimeDescription description={data} />
                                    <img
                                        alt={data.title}
                                        src={data.image_url}
                                        className={style.img}
                                    />
                                </div>
                                <div className={style.videoContainer}>
                                    <EpisodeButtons
                                        id={data.id}
                                        data={data}
                                        mutate={mutate}
                                    />
                                    {data.episode_url && !videoIsLoading && (
                                        <video
                                            controls={true}
                                            className={style.video}
                                        >
                                            <source
                                                className={style.videotttt}
                                                src={
                                                    currentEpisodeUrl as string
                                                }
                                                type={videoData?.content_type}
                                            />
                                        </video>
                                    )}
                                </div>
                                {videoIsLoading && <LoadingVideo />}
                                {!data.episode_url && !videoIsLoading && (
                                    <VideoNotFound />
                                )}
                            </div>
                            <SocialNetworks />
                        </section>
                    );
                }}
            />
        </Suspense>
    );
};
