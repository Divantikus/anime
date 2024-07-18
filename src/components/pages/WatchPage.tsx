import Select, { SingleValue, StylesConfig } from 'react-select';
import { useMutationVideo } from 'src/hooks/useMutationVideo.ts';
import { AnimeDescription } from 'src/components/AnimeDescription/AnimeDescription.tsx';
import { SocialNetworks } from 'src/components/social-networks/SocialNetworks.tsx';
import { VideoNotFound } from 'src/video-not-found/VideoNotFound.tsx';
import { useQueryWatch } from 'src/hooks/useQueryWatch.ts';
import { useParams } from 'react-router-dom';
import { Loading } from 'src/load/Loading.tsx';
import style from './styles/WatchPage.module.scss';
import {
    createEpisodeButton,
    SelectOption,
} from 'src/functions/createEpisodeButton.ts';

export const WatchPage = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useQueryWatch(id ? +id : NaN);
    const {
        data: videoData,
        mutate,
        isLoading: videoIsLoading,
    } = useMutationVideo();

    if (data === 'incorrect data' || isError || !data) {
        return <div>Error (</div>;
    }

    if (isLoading) {
        return <Loading height={15} />;
    }

    const changeVideo = (changeVideoEvent: SingleValue<SelectOption>) => {
        if (!changeVideoEvent) return;
        mutate({ episode: +changeVideoEvent.value, id: data.id });
    };

    const selectEpisodeStyle: StylesConfig = {
        container: (styles) => ({
            ...styles,
            position: 'absolute',
            zIndex: 100,
        }),
        input: (styles) => ({
            ...styles,
            color: '#ffffff',
        }),
        singleValue: (styles) => ({
            ...styles,
            color: '#ffffff',
        }),
        indicatorSeparator: (styles) => ({
            ...styles,
            backgroundColor: 'transparent',
        }),
        control: (styles) => ({
            ...styles,
            backgroundColor: '#252525',
            border: '1px solid black',
            color: '#fff',
        }),
        menuList: (styles) => ({
            ...styles,
            backgroundColor: '#252525',
            color: '#ffffff',
            scrollbarWidth: 'auto',
        }),
        option: (styles, { isFocused, isSelected }) => ({
            ...styles,
            backgroundColor:
                (isFocused && '#5e5e5e') ||
                (isSelected && '#5e5e5e') ||
                styles.backgroundColor,
        }),
    };

    return (
        <section>
            <div className={style.watch}>
                <div className={style.wrap}>
                    <AnimeDescription description={data} />
                    <img
                        alt={data.title}
                        className={style.img}
                        src={data.image_data}
                    />
                </div>
                <div className={style.videoContainer}>
                    <Select
                        onChange={changeVideo}
                        styles={selectEpisodeStyle}
                        placeholder={'Эпизод не выбран'}
                        defaultValue={`Серия ${data.episode_number}`}
                        options={createEpisodeButton(data.episodes_number)}
                    />
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
                {!data.episode_url && !videoIsLoading && <VideoNotFound />}
            </div>
            <SocialNetworks />
        </section>
    );
};
