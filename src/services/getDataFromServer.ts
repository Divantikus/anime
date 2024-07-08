import axios from "axios";
import {
    FilteringOptions, FullDescriptionAnime,
    NewsData, ReleasesData,
    Schedule,
    ShortDescriptionAnime
} from "src/services/types/DataFromServerTypes.ts";



class getDataFromServer {

    private baseURL = "http://localhost:8000/"
    private releaseURL = this.baseURL + "release/"

    async getNewsData(){
        return await axios.get<NewsData[]>(this.baseURL + "main_page")
    }

    async getDataSchedule(){
        return await axios.get<Schedule>(this.releaseURL + "schedule")
    }

    async getDataForSidebar(){
        return await axios.get<ShortDescriptionAnime[]>(this.baseURL + "side_panel")
    }

    async getFilteredAnime(options: FilteringOptions){
            const data = await axios.get<ReleasesData>(this.releaseURL + "filter?data=" + JSON.stringify(options))
            return data.data
    }

    async getTitle(id: number){

        if(isNaN(id)) return "incorrect data"

        return  await axios.get<FullDescriptionAnime>(this.releaseURL + "watch/" + id)
    }

}
export const getDataService = new getDataFromServer()
