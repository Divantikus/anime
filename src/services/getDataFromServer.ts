import axios from "axios";
import {
    FilteringOptions, FullDescriptionAnime,
    NewsData,
    Schedule,
    ShortDescriptionAnime
} from "src/services/types/DataFromServerTypes.ts";



class getDataFromServer {

    private mainURL = "http://localhost:8000/"
    private releaseURL = this.mainURL + "release/"

    async getNewsData(){
        return await axios.get<NewsData[]>(this.mainURL + "main_page")
    }

    async getDataSchedule(){
        return await axios.get<Schedule>(this.releaseURL + "schedule")
    }

    async getDataForSidebar(){
        return await axios.get<ShortDescriptionAnime[]>(this.mainURL + "side_panel")
    }

    async getFilteredAnime(options: FilteringOptions){
            const data = await axios.get<ShortDescriptionAnime[]>(this.releaseURL + "filter?data=" + JSON.stringify(options))
            return data.data
    }

    async getTitle(id: number){

        if(isNaN(id)) return "incorrect data"

        return  await axios.get<FullDescriptionAnime>(this.releaseURL + "watch/" + id)
    }

    // async getVideo(){
    //     const a = await axios.get('http://localhost:8000/release/watch/1/0')
    //     console.log(a)
    //     return a
    // }
}
export const getDataService = new getDataFromServer()
