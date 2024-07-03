import {AnimeDescription} from "src/components/AnimeDescription/AnimeDescription..tsx";
import {decodingJpgImg} from "src/components/pages/MainPage.tsx";
import {useQueryWatch} from "src/hooks/useQueryWatch.ts";
import {useParams} from "react-router-dom";
import {Loading} from "src/load/Loading.tsx";
import {useRef} from "react";
import style from './styles/WatchPage.module.scss'
import vk from 'public/watch/vk.jpg'
import tg from 'public/watch/tg.jpg'
import ds from 'public/watch/ds.jpg'


export const WatchPage = () => {

    const {id} = useParams()
    const video = useRef<HTMLVideoElement>(null)
    const {data, isLoading, isError} = useQueryWatch(id ? +id : NaN)

    if(data === "incorrect data" || isError || !data){
        return <div>Error (</div>
    }

    if(isLoading){
        return <Loading height={15}/>
    }

    return (
        <>
        <section className={style.watch}>
            <div className={style.wrap}>
                <AnimeDescription description={data}/>
                <img
                    src={decodingJpgImg + data.image_data}
                    alt={data.title}
                    className={style.img}
                />
            </div>
            <video style={{width: "100%", height: 500}} muted={true} ref={video} controls={true}>
                <source src="http://localhost:8000/release/watch/11/0" style={{width: "100%", height: 500}}/>
            </video>
            <button onClick={() => {video.current ?  video.current.play() : null}}>Start</button>
            <button onClick={() => {video.current ? video.current.pause() : null}}>Pause</button>
        </section>
            <div className={style.socialNetwork}>
                <a href="" className={style.link}><img src={vk} alt="vk" className={style.networkImg}/></a>
                <a href="" className={style.link}><img src={tg} alt="tg" className={style.networkImg}/></a>
                <a href="" className={style.link}><img src={ds} alt="ds" className={style.networkImg}/></a>
            </div>
        </>
    )
}