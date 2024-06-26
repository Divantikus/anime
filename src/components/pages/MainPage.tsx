import {useNewsData} from "src/hooks/useNewsData.ts";
import {Loading} from "src/load/Loading.tsx";
import style from './styles/MainPage.module.scss'
export const linkToBackendMedia = "../../../Backend"
export const MainPage = () => {
    const {data: axiosRes, isLoading} = useNewsData()

    if(isLoading){
        return <Loading/>
    }

    return (

        <article className={style.news}>
            {axiosRes?.map((title) => {
                return <a
                    href={title.url}
                    target="_blank"
                    key={title.id}
                    className={style.link}
                >
                    <img src={linkToBackendMedia + title.image} alt="img" className={style.bg}/>
                    <span className={style.whiteBg}></span>
                </a>
            })}
        </article>
    )
}