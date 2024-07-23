import { FullDescriptionAnime } from 'src/services/types/DataFromServerTypes.ts';
import { AxiosResponse } from 'axios';

export interface LoaderDataType {
    axiosData: Promise<AxiosResponse<FullDescriptionAnime>>;
}
