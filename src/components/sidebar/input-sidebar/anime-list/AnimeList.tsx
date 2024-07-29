import { AnimeDescFromSearch } from 'src/services/types/DataFromServerTypes.ts';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import style from 'src/components/sidebar/input-sidebar/anime-list/AnimeList.module.scss';

interface AnimeListProps {
    data: AnimeDescFromSearch[];
}

export const AnimeList: FC<AnimeListProps> = ({ data }) => {
    if (!data.length) {
        return (
            <p className={style.animeNotFound}>
                Аниме с таким названием отсутствуют
            </p>
        );
    }

    return (
        <ul className={style.animeList}>
            {data.map((title) => {
                return (
                    <li key={title.id} className={style.li}>
                        <Link
                            to={`/watch/${title.slug}`}
                            className={style.point}
                        >
                            <div className={style.imgContainer}>
                                <img
                                    src={title.image_url}
                                    alt={title.title}
                                    className={style.img}
                                />
                            </div>
                            <h3>{title.title}</h3>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
