import {shortDescriptionAnime} from "src/services/types/DataFromServerTypes.ts";

interface CardStyles{
    width: number,
    height: number,
    border: number,
    margin: number,
    fontSize: {title: number, episode: number, description: number},
}
export interface CardProps{
    styles: CardStyles,
    info: shortDescriptionAnime
}