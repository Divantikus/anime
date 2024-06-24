interface CardStyles{
    width: number,
    border: number,
    margin: number,
    fontSize: {title: number, episode: number, description: number},
}
interface TitleInfo {
    title: string,
    episode: string,
    description: string,
    img: string,
    id: string
}
export interface CardProps{
    styles: CardStyles,
    info: TitleInfo
}