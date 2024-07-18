import { selectEpisodeStyles } from 'src/components/episode-buttons/selectEpisodeStyles.ts';
import Select, { SingleValue } from 'react-select';
import { UseMutateFunction } from 'react-query';
import {
    FullDescriptionAnime,
    OptionsForGettingVideo,
    VideoData,
} from 'src/services/types/DataFromServerTypes.ts';
import {
    createEpisodeButton,
    SelectOption,
} from 'src/functions/createEpisodeButton.ts';
import { FC } from 'react';

export interface EpisodeButtonsProps {
    mutate: UseMutateFunction<VideoData, unknown, OptionsForGettingVideo>;
    id: number;
    data: FullDescriptionAnime;
}

export const EpisodeButtons: FC<EpisodeButtonsProps> = ({
    mutate,
    id,
    data,
}) => {
    const changeVideo = (changeVideoEvent: SingleValue<SelectOption>) => {
        if (!changeVideoEvent) return;
        mutate({ episode: +changeVideoEvent.value, id: id });
    };

    return (
        <Select
            onChange={changeVideo}
            styles={selectEpisodeStyles}
            placeholder={'Эпизод не выбран'}
            defaultValue={`Серия ${data.episode_number}`}
            options={createEpisodeButton(data.episodes_number)}
        />
    );
};
