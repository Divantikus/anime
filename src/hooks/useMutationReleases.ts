import {FilteringOptions, Season} from "src/services/types/DataFromServerTypes.ts";
import {getDataService} from "src/services/getDataFromServer.ts";
import {DataFromForm} from "src/components/search-form-by-parameters/SearchFormTypes.ts";
import {useMutation} from "react-query";

export const useMutationReleases = () => {

    return useMutation({
        mutationKey: ["getFilterData"],
        mutationFn: ({mutationData, page}: {mutationData :DataFromForm | null, page: number }) => {


            if (!mutationData) return getDataService.getFilteredAnime(null, page)

            const data = {} as FilteringOptions

            if(mutationData.choiceGenres && mutationData.choiceGenres[0]){
                data.genres = mutationData.choiceGenres.map(value => value.value)
            } else data.genres = []

            if(mutationData.chooseYear && mutationData.chooseYear[0]){
                data.year = mutationData.chooseYear.map(value => +value.value)
            } else data.year = []

            if(mutationData.chooseSeason && mutationData.chooseSeason[0]){
                data.season = mutationData.chooseSeason.map(value => value.value) as Season
            } else data.season = []

            data.is_completed = mutationData.releaseIsOver ? true : null
            data.popular_or_new = mutationData.isNew ? "new" : "popular"
            return getDataService.getFilteredAnime(data, page)
        },
    })
}