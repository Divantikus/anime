import axios from "axios";
import {FilteringOptions,
    NewsData,
    schedule,
    shortDescriptionAnime
} from "src/services/types/DataFromServerTypes.ts";



class getDataFromServer {
    private mainURL = "http://localhost:8000/"
    private releaseURL = this.mainURL + "release/"
    async getNewsData(){
        try {
            return await axios.get<NewsData[]>(this.mainURL + "main_page")
        }catch (e){
            console.log(e)
        }
    }
    async getDataSchedule(){
        try {
            return await axios.get<schedule>(this.mainURL + "release/schedule")
        }catch (e){
            console.log(e)
        }
    }
    async getDataForSidebar(){
        try {
            return await axios.get<shortDescriptionAnime[]>(this.releaseURL + "side_panel")
        }catch (e) {
            console.log(e)
        }
    }
    async getFilteredAnime(options: FilteringOptions){
        try {
            const json = {
                genres: null,
                year: 2018,
                season: "winter" ,
                popular_or_new: "new",
                is_completed: true
            }
            const data = await axios.get(this.releaseURL + "filter?data=" + JSON.stringify(json))
            console.log(data)
            return data
        }catch (e) {
            console.log(e)
        }

    }
}
export const getDataService = new getDataFromServer()
