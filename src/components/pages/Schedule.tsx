import {useQuerySchedule} from "src/hooks/useQuerySchedule.ts";
import {Loading} from "src/load/Loading.tsx";
import style from './styles/Schedule.module.scss'
import {DayWeek} from "src/components/pages/day-week/DayWeek.tsx";
import {shortDescriptionAnime} from "src/services/types/DataFromServerTypes.ts";

export const Schedule = () => {

    const {data: schedule, isLoading, isError} = useQuerySchedule()

    if(isLoading){
        return <Loading/>
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
            <DayWeek titles={schedule?.mon as shortDescriptionAnime[]} dayWeek={"ПОНЕДЕЛЬНИК"}/>
            <DayWeek titles={schedule?.tue as shortDescriptionAnime[]} dayWeek={"ВТОРНИК"}/>
            <DayWeek titles={schedule?.wed as shortDescriptionAnime[]} dayWeek={"СРЕДА"}/>
            <DayWeek titles={schedule?.thu as shortDescriptionAnime[]} dayWeek={"ЧЕТВЕРГ"}/>
            <DayWeek titles={schedule?.fri as shortDescriptionAnime[]} dayWeek={"ПЯТНИЦА"}/>
            <DayWeek titles={schedule?.sat as shortDescriptionAnime[]} dayWeek={"СУББОТА"}/>
            <DayWeek titles={schedule?.sun as shortDescriptionAnime[]} dayWeek={"ВОСКРЕСЕНЬЕ"}/>
        </section>
      )
}