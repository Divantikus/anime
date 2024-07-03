import {useQuerySideBar} from "src/hooks/useQuerySideBar.ts";
import {Loading} from "src/load/Loading.tsx";
import {Card} from "src/components/Card/Card.tsx";
import {Link} from "react-router-dom";
import style from './Sidebar.module.scss';
const cardStyles = {fontSize: {title: 15, episode: 14, description: 13}, border: 10, margin: 1, width: 260, height: 370}

export const Sidebar = () => {

    const {data: lastUploaded, isLoading, isError} = useQuerySideBar()

    if(isLoading){
        return <aside className={style.sideBar}>
             <Loading height={30}/>
        </aside>
    }

    if(isError){
        return <div>Error (</div>
    }

    return (
      <aside className={style.sideBar}>
          <div className={style.inputContainer}>
              <input placeholder="Найти аниме по названию" className={style.input} type="text"/>
          </div>
          {
              lastUploaded?.map(titleInfo => {
                  return (
                      <Link to={`/watch/${titleInfo.id}`} style={{display: "inline-block"}} key={titleInfo.id}>
                          <Card styles={cardStyles} info={titleInfo}/>
                      </Link>
                  )
              })
          }
      </aside>
    )
}