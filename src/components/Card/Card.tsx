import {CardProps} from "src/components/Card/CardsTypes.ts";
import {Link} from "react-router-dom";
import {FC} from "react";
import style from './Card.module.scss'


export const Card: FC<CardProps> = ({styles, info}) => {
  return (
      <Link to={`/watch/${info.id}`} style={{display: "inline-block"}}>
          <figure
              className={style.figure}
              style={{width: styles.width, borderWidth: styles.border}}
              key={info.id}
          >
              <img src={info.img} alt="poster" className={style.cardImg}/>
              <figcaption className={style.description}>
                  <h2 className={style.cardTitle}  style={{fontSize: `${styles.fontSize.title}pt`}}>
                      {info.title}
                  </h2>
                  <p className={style.cardEpisode} style={{fontSize: `${styles.fontSize.episode}pt`}}>
                      Серия: {info.episode}
                  </p>
                  <p className={style.cardDescription} style={{fontSize: `${styles.fontSize.description}pt`}}>
                      {info.description}
                  </p>
              </figcaption>
          </figure>
      </Link>
  )
}