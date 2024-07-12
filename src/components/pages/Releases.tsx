import {useMutationReleases} from "src/hooks/useMutationReleases.ts";
import {useEffect, useState} from "react";
import {SearchForm} from "src/components/search-form-by-parameters/SearchForm.tsx";
import {Loading} from "src/load/Loading.tsx";
import {Card} from "src/components/Card/Card.tsx";
import {Link} from "react-router-dom";
import style from './styles/Releases.module.scss'

const styles = {height: 390, border: 0, fontSize: {title: 14, episode: 14, description: 12}, width: 270, margin: 0}

export const Releases = () => {

    const {mutate, data, isLoading, isError} = useMutationReleases()
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        mutate({mutationData: null, page: 1})
    }, []);

    console.log("set", currentPage)

    return (
        <div className={style.some}>
            <SearchForm mutate={mutate} page={currentPage} resetPage={setCurrentPage}/>
            {isLoading && <Loading height={20}/>}
            {data &&
                <>
                    <div className={style.titles}>
                        {data.anime_list.map(title => {
                            return (
                                <Link to={`/watch/${title.id}`} key={title.id}>
                                    <Card styles={styles} info={title}/>
                                </Link>
                            )
                        })}
                    </div>
                    {currentPage - 3 > 0 &&
                        <button form="tryForm" onClick={() => {
                        setCurrentPage(currentPage - 3)
                        }}> {currentPage - 3}
                        </button>
                    }
                    {currentPage - 2 > 0 &&
                        <button form="tryForm" onClick={() => {
                            setCurrentPage(currentPage - 2)
                        }}> {currentPage - 2}
                        </button>
                    }
                    {currentPage - 1 > 0 &&
                        <button form="tryForm" onClick={() => {
                            setCurrentPage(currentPage - 1)
                        }}> {currentPage - 1}
                        </button>
                    }
                    {currentPage  &&
                        <button style={{background:"red"}}>
                            {currentPage}
                        </button>
                    }

                    {currentPage + 1 <= data.pages &&
                        <button form="tryForm" onClick={() => {
                            setCurrentPage(currentPage + 1)
                        }}> {currentPage + 1}
                        </button>
                    }
                    {currentPage + 2 <= data.pages &&
                        <button form="tryForm" onClick={() => {
                            setCurrentPage(currentPage + 2)
                        }}> {currentPage + 2}
                        </button>
                    }
                    {currentPage + 3 <= data.pages &&
                        <button form="tryForm" onClick={() => {
                            setCurrentPage(currentPage + 3)
                        }}> {currentPage + 3}
                        </button>
                    }
                </>
            }
            <button form="tryForm" onClick={() => {
                setCurrentPage(3)
            }}>hueta
            </button>
            {isError && <div>Error (</div>}
        </div>
    )
}