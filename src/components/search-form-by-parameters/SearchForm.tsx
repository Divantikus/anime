import {
    selectGenres,
    selectSeason,
    selectStyles,
    selectYear
} from "src/components/search-form-by-parameters/SearchFormVar.ts";
import {Dispatch, FC, SetStateAction} from "react";
import {UseMutateFunction} from "react-query";
import {OrdinaryCheckbox} from "src/components/ordinary-checkbox/OrdinaryCheckbox.tsx";
import {CustomCheckbox} from "src/components/custom-checkbox/CustomCheckbox.tsx";
import {useMyFormProv} from "src/hooks/useMyFormProv.ts";
import {CustomSelect} from "src/components/select/CustomSelect.tsx";
import {DataFromForm} from "src/components/search-form-by-parameters/SearchFormTypes.ts";
import {FormProvider} from "react-hook-form";
import {Link} from "react-router-dom";
import style from './SearchForm.module.scss'
import {ReleasesData} from "src/services/types/DataFromServerTypes.ts";

interface SearchFormProps{
    mutate: UseMutateFunction<ReleasesData, unknown, {     mutationData: DataFromForm | null;     page: number; }, unknown>
    page: number,
    resetPage: Dispatch<SetStateAction<number>>
}

export const SearchForm: FC<SearchFormProps> = ({mutate, page, resetPage}) => {

    const {methods, handleSubmit} = useMyFormProv<DataFromForm>()

    const submitFn = (e: DataFromForm) => {
        mutate({mutationData: e, page: page})
    }

    return (
        <FormProvider {...methods}>
            <form className={style.form} onSubmit={handleSubmit(submitFn)} id="tryForm">
                <div className={style.firstLine}>
                    <div style={{width: 390}}>
                        <CustomSelect
                            options={selectGenres}
                            styles={selectStyles}
                            selName={"choiceGenres"}
                            placeholder={"Жанр"}
                        />
                    </div>
                    <div style={{width: 240}}>
                        <CustomSelect
                            options={selectYear}
                            styles={selectStyles}
                            selName={"chooseYear"}
                            placeholder={"Год"}
                        />
                    </div>
                    <div style={{width: 180}}>
                        <CustomSelect
                            options={selectSeason}
                            styles={selectStyles}
                            selName={"chooseSeason"}
                            placeholder={"Сезон"}
                        />
                    </div>
                </div>
                <div className={style.secondLine}>
                    <button onClick={() => {resetPage(1)}} className={style.button}>Показать</button>
                    <CustomCheckbox leftSideText={"Новое"} rightSideText={"Популярное"} checkName={"isNew"}/>
                    <OrdinaryCheckbox checkName={"releaseIsOver"}/>
                    <Link to={'/'} className={style.link}>АЛФАВИТНЫЙ УКАЗАТЕЛЬ</Link>
                </div>
            </form>
        </FormProvider>
    )
}