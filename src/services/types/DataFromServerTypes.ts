export interface NewsData {
    id: number;
    title: string;
    url: string;
    image_data: string;
}
export interface ShortDescriptionAnime {
    id: number;
    title: string;
    image_data: string;
    description: string;
    episodes_number: number;
}
export interface Schedule {
    fri: ShortDescriptionAnime[];
    mon: ShortDescriptionAnime[];
    sat: ShortDescriptionAnime[];
    sun: ShortDescriptionAnime[];
    thu: ShortDescriptionAnime[];
    tue: ShortDescriptionAnime[];
    wed: ShortDescriptionAnime[];
}

export type Season = ['winter'?, 'summer'?, 'autumn'?, 'spring'?];

export interface FilteringOptions {
    genres: string[];
    year: number[];
    season: Season;
    popular_or_new: 'popular' | 'new';
    is_completed: true | null;
}

export interface FullDescriptionAnime extends ShortDescriptionAnime {
    season: 'winter' | 'summer' | 'autumn' | 'spring';
    status: string;
    genres: string[];
    voices: string[];
    timings: string[];
    subtitles: string[];
    favorites_count: number;
    episode_url: string | null;
    episode_number: number;
}

export interface ReleasesData {
    pages: number;
    anime_list: ShortDescriptionAnime[];
}

export interface OptionsForGettingVideo {
    episode: number;
    id: number;
}

export interface VideoData {
    episode_url: string;
    content_type: string;
}
