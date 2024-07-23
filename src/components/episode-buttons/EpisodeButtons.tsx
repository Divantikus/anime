import { selectEpisodeStyles } from 'src/components/episode-buttons/selectEpisodeStyles.ts';
import Select, { SingleValue } from 'react-select';
import { EpisodeButtonsProps } from 'src/components/episode-buttons/EpisodeButtonsTypes.ts';
import {
    createEpisodeButton,
    SelectOption,
} from 'src/functions/createEpisodeButton.ts';
import { FC } from 'react';

export const EpisodeButtons: FC<EpisodeButtonsProps> = ({
    mutate,
    id,
    data,
}) => {
    const changeVideo = (event: unknown) => {
        const changeVideoEvent = event as SingleValue<SelectOption>;

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
