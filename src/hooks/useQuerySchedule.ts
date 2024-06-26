import {useQuery} from "react-query";
import {getDataService} from "src/services/getDataFromServer.ts";

export const useQuerySchedule = () => {
  return useQuery({
      queryKey: ["getDataSchedule"],
      queryFn: async () => {
          return await getDataService.getDataSchedule()
      },
      select: (data) => data?.data
  })
}