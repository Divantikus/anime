import { UseMutateFunction } from 'react-query';
import { ReleasesData } from 'src/services/types/DataFromServerTypes.ts';
import { Dispatch, SetStateAction } from 'react';

export interface Options {
    value: string;
    label: string;
}

export interface SeasonOptions extends Options {
    value: 'winter' | 'summer' | 'autumn' | 'spring';
}

export type DataFromForm = {
    choiceGenres: Options[];
    chooseSeason: SeasonOptions[];
    chooseYear: Options[];
    releaseIsOver: boolean;
    isNew: boolean;
    page: number;
};

export interface SearchFormProps {
    mutate: UseMutateFunction<
        ReleasesData,
        unknown,
        { mutationData: DataFromForm | null; page: number },
        unknown
    >;
    page: number;
    resetPage: Dispatch<SetStateAction<number>>;
}
