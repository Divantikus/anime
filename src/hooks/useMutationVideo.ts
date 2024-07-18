import { useMutation } from 'react-query';
import { getDataService } from 'src/services/getDataFromServer.ts';
import { OptionsForGettingVideo } from 'src/services/types/DataFromServerTypes.ts';

export const useMutationVideo = () => {
    return useMutation({
        mutationKey: ['getVideo'],
        mutationFn: async (options: OptionsForGettingVideo) => {
            return await getDataService.getVideo(options);
        },
    });
};
