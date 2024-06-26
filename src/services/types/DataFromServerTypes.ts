export interface NewsData {
    id: number,
    title: string,
    url: string,
    image: string
}
export interface shortDescriptionAnime{
    id: number,
    title: string,
    image: string,
    description: string,
    episodes_number: number,
}
export interface schedule {
    fri: shortDescriptionAnime[],
    mon: shortDescriptionAnime[],
    sat: shortDescriptionAnime[],
    sun: shortDescriptionAnime[],
    thu: shortDescriptionAnime[],
    tue: shortDescriptionAnime[],
    wed: shortDescriptionAnime[],
}
export interface FilteringOptions {
    genres: string[] | null,
    year: number | null,
    season: "winter" | "summer" | "autumn" | "spring" | null,
    popular_or_new: "popular" | "new" | null,
    is_completed: true | null
}