import style from './Sidebar.module.scss'
import {Card} from "src/components/Card/Card.tsx";
import titleImg from "src/img/poster/EDgiSx6F0VkWZblG__a1f13d5ac820a8b52fb65cc9b4b5566d.jpg";
const cardStyles = {fontSize: {title: 15, episode: 14, description: 13}, border: 10, margin: 1, width: 260}
const cardDesc = {img: titleImg, id: "aboba", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, culpa doloribus eligendi facilis odit omnis tempore? Impedit molestias natus sint. Releases description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, magnam?", title: "Releases Title", episode: "1-20"}

export const Sidebar = () => {
  return (
      <aside className={style.sideBar}>
          <div className={style.inputContainer}>
              <input placeholder="Найти аниме по названию" className={style.input} type="text"/>
          </div>
          <Card styles={cardStyles} info={cardDesc}/>
          <Card styles={cardStyles} info={cardDesc}/>
          <Card styles={cardStyles} info={cardDesc}/>
      </aside>
  )
}