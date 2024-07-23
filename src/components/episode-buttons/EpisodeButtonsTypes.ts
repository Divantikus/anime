import {
    FullDescriptionAnime,
    OptionsForGettingVideo,
    VideoData,
} from 'src/services/types/DataFromServerTypes.ts';
import { UseMutateFunction } from 'react-query';

export interface EpisodeButtonsProps {
    mutate: UseMutateFunction<VideoData, unknown, OptionsForGettingVideo>;
    id: number;
    data: FullDescriptionAnime;
}
