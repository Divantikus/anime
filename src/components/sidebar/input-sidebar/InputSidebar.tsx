import { useSearchMutation } from 'src/hooks/useSearchMutation.ts';
import { useDebounce } from 'src/hooks/useDebounce.ts';
import { AnimeList } from 'src/components/sidebar/input-sidebar/anime-list/AnimeList.tsx';
import { useState } from 'react';
import style from 'src/components/sidebar/input-sidebar/InputSidebar.module.scss';

export const InputSidebar = () => {
    const { data, mutate, isError } = useSearchMutation();
    const [isFocus, setIsFocus] = useState(false);
    const debounce = useDebounce();

    const searchByName = (titleName: string) => {
        if (!titleName) return;
        mutate(titleName);
    };

    if (isError) return <div>error (</div>;

    return (
        <div className={style.inputContainer}>
            <input
                type="text"
                onKeyUp={(e) =>
                    debounce(searchByName, 500, e.currentTarget.value.trim())
                }
                className={style.input}
                onBlur={() => {
                    setTimeout(() => {
                        setIsFocus(false);
                    }, 100);
                }}
                onFocus={() => setIsFocus(true)}
                placeholder="Найти аниме по названию"
            />
            {data && isFocus && <AnimeList data={data} />}
        </div>
    );
};
