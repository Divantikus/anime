import { Dispatch, ReactNode, SetStateAction } from 'react';
import style from 'src/components/pages/styles/WatchPage.module.scss';

type CreateButtonsT = (
    episodes: number,
    setCurrentEpisode: Dispatch<SetStateAction<number | null>>
) => ReactNode[];

export const createButtons: CreateButtonsT = (episodes, setCurrentEpisode) => {
    const buttons = [];
    for (let episodeNumber = 1; episodeNumber <= episodes; episodeNumber++) {
        buttons.push(
            <button
                key={episodeNumber}
                className={style.episodeBtn}
                onClick={() => {
                    setCurrentEpisode(episodeNumber);
                }}
            >
                Эпизод {episodeNumber}
            </button>
        );
    }
    return buttons;
};
