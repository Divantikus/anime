import { DayWeekProps } from 'src/components/pages/day-week/DayWeekTypes.ts';
import { Link } from 'react-router-dom';
import { Card } from 'src/components/Card/Card.tsx';
import { FC } from 'react';
import style from './DayWeek.module.scss';

const cardStyles = {
    fontSize: { title: 13, episode: 12, description: 11 },
    border: 3,
    margin: 1,
    width: 200,
    height: 280,
};

export const DayWeek: FC<DayWeekProps> = ({ titles = [], dayWeek }) => {
    return (
        <div className={style.day}>
            <p className={style.dayName}>{dayWeek}</p>
            {titles.map((titleInfo) => {
                return (
                    <Link
                        key={titleInfo.id}
                        to={`/watch/${titleInfo.id}`}
                        style={{ display: 'inline-block' }}
                        onClick={() => window.scroll(0, 0)}
                    >
                        <Card styles={cardStyles} info={titleInfo} />
                    </Link>
                );
            })}
        </div>
    );
};
