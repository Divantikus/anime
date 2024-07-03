import style from './DayWeek.module.scss'
import {Link} from "react-router-dom";
import {Card} from "src/components/Card/Card.tsx";
import {ShortDescriptionAnime} from "src/services/types/DataFromServerTypes.ts";
import {FC} from "react";
const cardStyles = {fontSize: {title: 13, episode: 12, description: 11}, border: 3, margin: 1, width: 200, height: 280}

interface DayWeekProps {
    titles: ShortDescriptionAnime[],
    dayWeek: 'ПОНЕДЕЛЬНИК' | 'ВТОРНИК' | 'СРЕДА' | 'ЧЕТВЕРГ' | 'ПЯТНИЦА' | 'СУББОТА' | 'ВОСКРЕСЕНЬЕ'
}

export const DayWeek: FC<DayWeekProps> = ({titles = [], dayWeek}) => {
  return (
      <div className={style.day}>
          <p className={style.dayName}>{dayWeek}</p>
          {titles.map(titleInfo => {
              return (
                  <Link to={`/watch/${titleInfo.id}`} style={{display: "inline-block"}} key={titleInfo.id}>
                      <Card styles={cardStyles} info={titleInfo}/>
                  </Link>
              )
          })}
      </div>
  )
}