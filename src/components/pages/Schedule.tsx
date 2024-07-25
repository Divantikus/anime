import { useQuerySchedule } from 'src/hooks/useQuerySchedule.ts';
import { Loading } from 'src/components/loading/Loading.tsx';
import { DayWeek } from 'src/components/pages/day-week/DayWeek.tsx';
import style from './styles/Schedule.module.scss';

export const Schedule = () => {
    const { data: schedule, isLoading, isError } = useQuerySchedule();

    if (isLoading) {
        return <Loading height={20} />;
    }

    if (isError || (!schedule && !isLoading)) {
        return <div>Error (</div>;
    }

    return (
        <section className={style.scheduleSection}>
            <h1 className={style.title}>
                РАСПИСАНИЕ ВЫХОДА СЕРИЙ В ОЗВУЧКЕ АНИЛИБРИИ*
            </h1>
            <p className={style.warning}>
                *новые серии выходят в этот день недели +-1 день. В начале
                сезона расписание может не соответствовать действительности.
                Если серии задерживаются — это будет указано в статусе релиза
                (над постером).
            </p>
            <DayWeek titles={schedule.mon} dayWeek={'ПОНЕДЕЛЬНИК'} />
            <DayWeek titles={schedule.tue} dayWeek={'ВТОРНИК'} />
            <DayWeek titles={schedule.wed} dayWeek={'СРЕДА'} />
            <DayWeek titles={schedule.thu} dayWeek={'ЧЕТВЕРГ'} />
            <DayWeek titles={schedule.fri} dayWeek={'ПЯТНИЦА'} />
            <DayWeek titles={schedule.sat} dayWeek={'СУББОТА'} />
            <DayWeek titles={schedule.sun} dayWeek={'ВОСКРЕСЕНЬЕ'} />
        </section>
    );
};
