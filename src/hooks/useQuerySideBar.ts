import { useQuery } from 'react-query';
import { getDataService } from 'src/services/getDataFromServer.ts';

export const useQuerySideBar = () => {
    return useQuery({
        queryKey: ['getDataForSideBar'],
        queryFn: async () => {
            return await getDataService.getDataForSidebar();
        },
        select: (data) => data?.data,
    });
};
