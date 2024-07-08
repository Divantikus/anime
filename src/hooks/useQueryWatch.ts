import {useQuery} from "react-query";
import {getDataService} from "src/services/getDataFromServer.ts";
import {FullDescriptionAnime} from "src/services/types/DataFromServerTypes.ts";

export const useQueryWatch = (getId: () => number) => {
    return useQuery({
        queryKey: ["getFullDataAboutTitle"],
        queryFn: async () => {
            return await getDataService.getTitle(getId())
        },
        select: (data) => {
            if(data === "incorrect data"){
                return "incorrect data"
            }
            return data.data as FullDescriptionAnime
        },
    })
}