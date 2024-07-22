import { defer, LoaderFunctionArgs } from 'react-router-dom';
import { getDataService } from 'src/services/getDataFromServer.ts';

export const downloadFullInformationAboutAnime = async (
    loaderArgs: LoaderFunctionArgs
) => {
    const data = getDataService.getTitle(loaderArgs.params.slug);
    return defer({ axiosData: data });
};
