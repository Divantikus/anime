import axios from 'axios';
import {
    ShortDescriptionAnime, SlugType, VideoData,
    NewsData, OptionsForGettingVideo,
    FullDescriptionAnime,
    FilteringOptions,
    ReleasesData,
    Schedule,
} from 'src/services/types/DataFromServerTypes.ts';

class getDataFromServer {

    private baseURL = 'http://localhost:8000/';
    private releaseURL = this.baseURL + 'release/';
    private filterURL = this.releaseURL + "filter/"
    private watchURL = this.releaseURL + 'watch/'

    async getNewsData() {
        return await axios.get<NewsData[]>(this.baseURL + 'main_page');
    }

    async getDataSchedule() {
        return await axios.get<Schedule>(this.releaseURL + 'schedule');
    }

    async getDataForSidebar() {
        return await axios.get<ShortDescriptionAnime[]>(this.baseURL + 'side_panel');
    }

    async getFilteredAnime(options: FilteringOptions | null, page: number) {

        if (!options) {
            const data = await axios.get<ReleasesData>(this.filterURL + page);
            return data.data;
        }

        const data = await axios.get<ReleasesData>(this.filterURL + page + `?data=` + JSON.stringify(options));
        return data.data;
    }

    async getTitle(slug: SlugType) {
        return await axios.get<FullDescriptionAnime>(this.watchURL + slug);
    }

    async getVideo({episode, id}: OptionsForGettingVideo) {
        const data = await axios.get<VideoData>(this.watchURL + id + '/' + episode);
        return data.data
    }
}
export const getDataService = new getDataFromServer();
