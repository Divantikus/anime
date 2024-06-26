import {useQuery} from "react-query";
import {getDataService} from "src/services/getDataFromServer.ts";

export const useNewsData = () => {
  return useQuery({
      queryKey: ["newsData"],
      queryFn: async () => {
          return await getDataService.getNewsData()
      },
      select: (axiosRes) => axiosRes?.data
  })
}