import { ShortDescriptionAnime } from 'src/services/types/DataFromServerTypes.ts';

export interface CardStyles {
    width: number;
    height: number;
    border: number;
    margin: number;
    fontSize: { title: number; episode: number; description: number };
}

export interface CardProps {
    styles: CardStyles;
    info: ShortDescriptionAnime;
}
