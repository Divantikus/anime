import {Options, SeasonOptions} from "src/components/search-form-by-parameters/SearchFormTypes.ts";
import {StylesConfig} from "react-select";

export const selectStyles: StylesConfig = {
    control: (styles) =>  ({...styles, height: "100%"}),
    container: (styles) =>  ({...styles, height: "100%"})
}

export const selectGenres: Readonly<Options[]> = [
    {value: "Этти", label: "Этти"},
    {value: "Меха", label: "Меха"},
    {value: "Экшен", label: "Экшен"},
    {value: "Драма", label: "Драма"},
    {value: "Школа", label: "Школа"},
    {value: "Магия", label: "Магия"},
    {value: "Сёнен", label: "Сёнен"},
    {value: "Демоно", label: "Демоно"},
    {value: "Сейнен", label: "Сейнен"},
    {value: "Музыка", label: "Музыка"},
    {value: "Фэнтези", label: "Фэнтези"},
    {value: "Комедия", label: "Комедия"},
    {value: "Пародия", label: "Пародия"},
    {value: "Детектив", label: "Детектив"},
    {value: "Романтика", label: "Романтика"},
    {value: "Фантастика", label: "Фантастика"},
    {value: "Приключения", label: "Приключения"},
    {value: "Исторический", label: "Исторический"},
    {value: "Психологическое", label: "Психологическое"},
    {value: "Боевые искусства", label: "Боевые искусства"},
    {value: "Сверхъестественно", label: "Сверхъестественно"},
]
export const selectYear: Readonly<Options[]> = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
    { value: "2017", label: "2017" },
    { value: "2016", label: "2016" },
    { value: "2015", label: "2015" },
    { value: "2014", label: "2014" },
    { value: "2013", label: "2013" },
    { value: "2012", label: "2012" },
    { value: "2011", label: "2011" },
    { value: "2010", label: "2010" },
    { value: "2009", label: "2009" },
    { value: "2008", label: "2008" },
    { value: "2007", label: "2007" },
    { value: "2006", label: "2006" },
    { value: "2005", label: "2005" },
    { value: "2004", label: "2004" },
    { value: "2003", label: "2003" },
    { value: "2002", label: "2002" },
    { value: "2001", label: "2001" },
    { value: "2000", label: "2000" },
    { value: "1999", label: "1999" },
    { value: "1998", label: "1998" },
    { value: "1997", label: "1997" },
    { value: "1996", label: "1996" }
]

export const selectSeason: Readonly<SeasonOptions[]> = [
    {value: "winter", label: "Зима"},
    {value: "summer", label: "Лето"},
    {value: "autumn", label: "Осень"},
    {value: "spring", label: "Весна"}
]
