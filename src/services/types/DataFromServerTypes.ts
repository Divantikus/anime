export interface NewsData {
    id: number;
    url: string;
    title: string;
    image_url: string;
}
export interface ShortDescriptionAnime {
    id: number;
    slug: string;
    title: string;
    image_url: string;
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
    year: number[];
    season: Season;
    genres: string[];
    is_completed: true | null;
    popular_or_new: 'popular' | 'new';
}

export interface FullDescriptionAnime extends ShortDescriptionAnime {
    season: 'winter' | 'summer' | 'autumn' | 'spring';
    status: string;
    genres: string[];
    voices: string[];
    timings: string[];
    subtitles: string[];
    episode_number: number;
    favorites_count: number;
    episode_url: string | null;
}

export interface ReleasesData {
    pages: number;
    anime_list: ShortDescriptionAnime[];
}

export interface OptionsForGettingVideo {
    id: number;
    episode: number;
}

export interface VideoData {
    episode_url: string;
    content_type: string;
}

export type SlugType = string | undefined;

export interface AnimeDescFromSearch {
    id: number;
    slug: string;
    title: string;
    image_url: string;
}
