import {getDataService} from "src/services/getDataFromServer.ts";
import {useQuery} from "react-query";

export const useNewsData = () => {
  return useQuery({
      queryKey: ["newsData"],
      queryFn: () => {
          return getDataService.getNewsData()
      },
      select: (axiosRes) => {
          return axiosRes?.data
      }
  })
}