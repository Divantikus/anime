import { CreatingMultipleCards } from 'src/components/Creating-multiple-cards/CreatingMultipleCards.tsx';
import { DayWeekProps } from 'src/components/pages/day-week/DayWeekTypes.ts';
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
            <CreatingMultipleCards
                arrayWithAnimeData={titles}
                cardStyles={cardStyles}
            />
        </div>
    );
};
