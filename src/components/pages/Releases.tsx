import { PageSelectionButtons } from 'src/components/page-selection-buttons/PageSelectionButtons.tsx';
import { useMutationReleases } from 'src/hooks/useMutationReleases.ts';
import { useEffect, useState } from 'react';
import { releaseCardStyles } from 'src/components/pages/variables/ReleasesVariables.ts';
import { SearchForm } from 'src/components/search-form-by-parameters/SearchForm.tsx';
import { Loading } from 'src/components/loading/Loading.tsx';
import { Card } from 'src/components/Card/Card.tsx';
import { Link } from 'react-router-dom';
import style from './styles/Releases.module.scss';

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
                    {!data.anime_list.length && (
                        <h2 className={style.animeIsMissingTitle}>
                            Нет подходящих аниме
                        </h2>
                    )}
                    {!!data.anime_list.length && (
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
                                            <Card
                                                styles={releaseCardStyles}
                                                info={title}
                                            />
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
                </>
            )}
            {isError && <div>Error (</div>}
        </div>
    );
};
