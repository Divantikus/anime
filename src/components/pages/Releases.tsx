import {Card} from "src/components/Card/Card.tsx";
import titleImg from 'src/img/poster/EDgiSx6F0VkWZblG__a1f13d5ac820a8b52fb65cc9b4b5566d.jpg'
import {getDataService} from "src/services/getDataFromServer.ts";
const cardStyles = {fontSize: {title: 13, episode: 12, description: 11}, border: 3, margin: 1, width: 200}
const cardDesc = {img: titleImg, id: "aboba", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, culpa doloribus eligendi facilis odit omnis tempore? Impedit molestias natus sint. Releases description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, magnam?", title: "Releases Title", episode: "1-20"}

export const Releases = () => {
    getDataService.getNewsData()
  return (
      <section>
        <Card styles={cardStyles} info={cardDesc}/>
      </section>
  )
}