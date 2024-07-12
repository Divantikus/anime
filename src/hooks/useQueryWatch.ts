import { useQuery } from 'react-query';
import { getDataService } from 'src/services/getDataFromServer.ts';
import { FullDescriptionAnime } from 'src/services/types/DataFromServerTypes.ts';

export const useQueryWatch = (id: number) => {
    return useQuery({
        queryKey: ['getFullDataAboutTitle'],
        queryFn: async () => {
            return await getDataService.getTitle(id);
        },
        select: (data) => {
            if (data === 'incorrect data') return 'incorrect data';

            return data.data as FullDescriptionAnime;
        },
    });
};
