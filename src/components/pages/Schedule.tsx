import {ShortDescriptionAnime} from "src/services/types/DataFromServerTypes.ts";
import {useQuerySchedule} from "src/hooks/useQuerySchedule.ts";
import {Loading} from "src/load/Loading.tsx";
import {DayWeek} from "src/components/pages/day-week/DayWeek.tsx";
import style from './styles/Schedule.module.scss'

export const Schedule = () => {

    const {data: schedule, isLoading, isError} = useQuerySchedule()

    if(isLoading){
        return <Loading height={20}/>
    }

    if(isError){
        return <div>Error (</div>
    }

    return (
        <section className={style.scheduleSection}>
            <h1 className={style.title}>РАСПИСАНИЕ ВЫХОДА СЕРИЙ В ОЗВУЧКЕ АНИЛИБРИИ*</h1>
            <p className={style.warning}>
                *новые серии выходят в этот день недели +-1 день. В начале сезона расписание может не соответствовать действительности. Если серии задерживаются — это будет указано в статусе релиза (над постером).
            </p>
            <DayWeek titles={schedule?.mon as ShortDescriptionAnime[]} dayWeek={"ПОНЕДЕЛЬНИК"}/>
            <DayWeek titles={schedule?.tue as ShortDescriptionAnime[]} dayWeek={"ВТОРНИК"}/>
            <DayWeek titles={schedule?.wed as ShortDescriptionAnime[]} dayWeek={"СРЕДА"}/>
            <DayWeek titles={schedule?.thu as ShortDescriptionAnime[]} dayWeek={"ЧЕТВЕРГ"}/>
            <DayWeek titles={schedule?.fri as ShortDescriptionAnime[]} dayWeek={"ПЯТНИЦА"}/>
            <DayWeek titles={schedule?.sat as ShortDescriptionAnime[]} dayWeek={"СУББОТА"}/>
            <DayWeek titles={schedule?.sun as ShortDescriptionAnime[]} dayWeek={"ВОСКРЕСЕНЬЕ"}/>
        </section>
      )
}