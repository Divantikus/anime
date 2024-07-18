import { ShortDescriptionAnime } from 'src/services/types/DataFromServerTypes.ts';

export interface DayWeekProps {
    titles: ShortDescriptionAnime[];
    dayWeek:
        | 'ПОНЕДЕЛЬНИК'
        | 'ВТОРНИК'
        | 'СРЕДА'
        | 'ЧЕТВЕРГ'
        | 'ПЯТНИЦА'
        | 'СУББОТА'
        | 'ВОСКРЕСЕНЬЕ';
}
