import {FullDescriptionAnime} from "src/services/types/DataFromServerTypes.ts";

export interface AnimeDescriptionProps {
    description: FullDescriptionAnime | undefined
}

export type TCreateString = (arr: string[]) => string