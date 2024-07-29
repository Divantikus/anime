import { getDataService } from 'src/services/getDataFromServer.ts';
import { useMutation } from 'react-query';

export const useSearchMutation = () => {
    return useMutation({
        mutationKey: ['getSearchData'],
        mutationFn: async (titleName: string) => {
            return await getDataService.getSearchData(titleName);
        },
    });
};
