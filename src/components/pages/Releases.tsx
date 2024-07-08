import {useMutationReleases} from "src/hooks/useMutationReleases.ts";
import {DataFromForm} from "src/components/search-form-by-parameters/SearchFormTypes.ts";
import {SearchForm} from "src/components/search-form-by-parameters/SearchForm.tsx";
import {useEffect} from "react";
import {Loading} from "src/load/Loading.tsx";
import {Card} from "src/components/Card/Card.tsx";
import {Link} from "react-router-dom";
import style from './styles/Releases.module.scss'

const styles = {height: 390, border: 0, fontSize: {title: 14, episode: 14, description: 12}, width: 270, margin: 0}

export const Releases = () => {

    const {mutate, data, isLoading, isError} = useMutationReleases<DataFromForm>()

    useEffect(() => {
        mutate({choiceGenres: [], chooseSeason: [], isNew: false, releaseIsOver: false, chooseYear: []})
    }, []);
    console.log(isError)
    return (
        <div className={style.some}>
            <SearchForm mutate={mutate}/>
            {isLoading && <Loading height={20}/>}
            {
                data && <div className={style.titles}>
                        {data.anime_list.map(title => {
                            return (
                                <Link to={`/watch/${title.id}`} key={title.id}>
                                    <Card styles={styles} info={title}/>
                                </Link>
                            )
                        })}
                      </div>
            }
            {isError && <div>Error (</div>}
        </div>
    )
}