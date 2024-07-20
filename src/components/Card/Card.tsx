import { CardProps } from 'src/components/Card/CardsTypes.ts';
import { FC } from 'react';
import style from './Card.module.scss';

export const Card: FC<CardProps> = ({ styles, info }) => {
    return (
        <figure
            className={style.figure}
            style={{
                width: styles.width,
                borderWidth: styles.border,
                height: styles.height,
            }}
            key={info.id}
        >
            <img src={info.image_url} alt="poster" className={style.cardImg} />
            <figcaption className={style.description}>
                <h2
                    className={style.cardTitle}
                    style={{ fontSize: `${styles.fontSize.title}pt` }}
                >
                    {info.title}
                </h2>
                <p
                    className={style.cardEpisode}
                    style={{ fontSize: `${styles.fontSize.episode}pt` }}
                >
                    {info.episodes_number
                        ? `Серия: 1-${info.episodes_number}`
                        : ''}
                </p>
                <p
                    className={style.cardDescription}
                    style={{ fontSize: `${styles.fontSize.description}pt` }}
                >
                    {info.description}
                </p>
            </figcaption>
        </figure>
    );
};
