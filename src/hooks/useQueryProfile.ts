import { useQuery } from 'react-query';

export const useQueryProfile = () => {
    return useQuery({
        queryKey: ['getProfile'],
        queryFn: () => {
            return 1;
        },
    });
};
