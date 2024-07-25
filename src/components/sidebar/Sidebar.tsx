import { CreatingMultipleCards } from 'src/components/Creating-multiple-cards/CreatingMultipleCards.tsx';
import { useQuerySideBar } from 'src/hooks/useQuerySideBar.ts';
import { Loading } from 'src/components/loading/Loading.tsx';
import style from './Sidebar.module.scss';

const cardStyles = {
    fontSize: { title: 15, episode: 14, description: 13 },
    border: 10,
    margin: 1,
    width: 260,
    height: 370,
};

export const Sidebar = () => {
    const { data: lastUploaded, isLoading, isError } = useQuerySideBar();

    if (isLoading) {
        return (
            <aside className={style.sideBar}>
                <Loading height={30} />
            </aside>
        );
    }

    if (isError || !lastUploaded) {
        return <div>Error (</div>;
    }

    return (
        <aside className={style.sideBar}>
            <div className={style.inputContainer}>
                <input
                    placeholder="Найти аниме по названию"
                    className={style.input}
                    type="text"
                />
            </div>
            <CreatingMultipleCards
                arrayWithAnimeData={lastUploaded}
                cardStyles={cardStyles}
            />
        </aside>
    );
};
