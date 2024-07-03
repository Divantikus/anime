export interface NewsData {
    id: number,
    title: string,
    url: string,
    image_data: string
}
export interface ShortDescriptionAnime {
    id: number,
    title: string,
    image_data: string,
    description: string,
    episodes_number: number,
}
export interface Schedule {
    fri: ShortDescriptionAnime[],
    mon: ShortDescriptionAnime[],
    sat: ShortDescriptionAnime[],
    sun: ShortDescriptionAnime[],
    thu: ShortDescriptionAnime[],
    tue: ShortDescriptionAnime[],
    wed: ShortDescriptionAnime[],
}

export type Season = ["winter"?, "summer"?, "autumn"?, "spring"?] | null

export interface FilteringOptions {
    genres: string[] | null,
    year: number[] | null,
    season: Season,
    popular_or_new: "popular" | "new" | null,
    is_completed: true | null
}
export interface FullDescriptionAnime extends ShortDescriptionAnime{
    season: string,
    status: string,
    genres: string[],
    voices: string[],
    timings: string[],
    subtitles: string[]
    favorites_count: number,
}