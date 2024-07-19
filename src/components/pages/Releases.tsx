import { PageSelectionButtons } from 'src/components/page-selection-buttons/PageSelectionButtons.tsx';
import { useMutationReleases } from 'src/hooks/useMutationReleases.ts';
import { useEffect, useState } from 'react';
import { SearchForm } from 'src/components/search-form-by-parameters/SearchForm.tsx';
import { Loading } from 'src/components/loading/Loading.tsx';
import { Card } from 'src/components/Card/Card.tsx';
import { Link } from 'react-router-dom';
import style from './styles/Releases.module.scss';

const styles = {
    height: 390,
    border: 0,
    fontSize: { title: 14, episode: 14, description: 12 },
    width: 270,
    margin: 0,
};

export const Releases = () => {
    const { mutate, data, isLoading, isError } = useMutationReleases();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        mutate({ mutationData: null, page: 1 });
    }, []);

    return (
        <div className={style.relContainer}>
            <SearchForm
                mutate={mutate}
                page={currentPage}
                resetPage={setCurrentPage}
            />
            {isLoading && <Loading height={20} />}
            {data && (
                <>
                    <div className={style.titles}>
                        {data.anime_list.map((title) => {
                            return (
                                <Link
                                    to={`/watch/${title.slug}`}
                                    key={title.id}
                                    className={style.link}
                                    onClick={() => window.scroll(0, 0)}
                                >
                                    <Card styles={styles} info={title} />
                                </Link>
                            );
                        })}
                    </div>
                    <PageSelectionButtons
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        data={data}
                    />
                </>
            )}
            {isError && <div>Error (</div>}
        </div>
    );
};
