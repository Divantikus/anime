import { ShortDescriptionAnime } from 'src/services/types/DataFromServerTypes.ts';
export interface LoginData {
    [key: string]: string;
    username: string;
    password: string;
}

export interface RegistrationData extends LoginData {
    [key: string]: string;
    email: string;
}

export interface ProfileData {
    id: number;
    email: string;
    username: string;
    image_url: string;
    favorites: string[];
    in_plans: ShortDescriptionAnime[];
    discarded: ShortDescriptionAnime[];
    watched: ShortDescriptionAnime[];
}
