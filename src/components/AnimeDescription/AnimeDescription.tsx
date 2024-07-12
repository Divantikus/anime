import {AnimeDescriptionProps, TCreateString} from "src/components/AnimeDescription/AnimeDescriptionTypes.ts";
import {FC} from "react";
import style from "./AnimeDescription.module.scss"

export const AnimeDescription: FC<AnimeDescriptionProps> = ({description}) => {

    const createString: TCreateString = (arr) => {

        if (!arr.length) return ""

        return arr.reduce((acc, genre) => {
            return acc + ", " + genre
        })
    }

    if(!description) return <div></div>

        return (
            <div style={{fontSize: 16, width: 470}}>
                <h2 className={style.title}>{description.title}</h2>
                <div className={style.wrap}>
                    <div>
                        <b className={style.boldText}>Сезон:</b> {description.season}
                    </div>
                    <div>
                        <b className={style.boldText}>Эпизодов:</b> {description.episodes_number}
                    </div>
                    <div>
                        <b className={style.boldText}>Жанры:</b> {createString(description.genres)}
                    </div>
                    <div>
                        <b className={style.boldText}>Озвучка:</b> {createString(description.voices)}
                    </div>
                    <div>
                        <b className={style.boldText}>Тайминг:</b> {createString(description.timings)}
                    </div>
                    <div>
                        <b className={style.boldText}>Работа над субтитрами:</b> {createString(description.subtitles)}
                    </div>
                </div>
                <p className={style.text}>
                    {description.description}
                </p>
            </div>
        )
}