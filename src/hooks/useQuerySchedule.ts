import {useQuery} from "react-query";
import {getDataService} from "src/services/getDataFromServer.ts";

export const useQuerySchedule = () => {
  return useQuery({
      queryKey: ["getDataSchedule"],
      queryFn: () => {
          return getDataService.getDataSchedule()
      },
      select: (data) => data?.data,

  })
}