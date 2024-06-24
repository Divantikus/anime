import axios from "axios";
export interface NewsData {
    id: number,
    title: string,
    url: string,
}
class getDataFromServer {
    URL = "http://localhost:8000/api/main_page_videos"
    async getNewsData(){
        try {
            return await axios.get<NewsData[]>(this.URL)
        }catch (e){
            console.log("error")
        }
    }
}
export const getDataService = new getDataFromServer()
