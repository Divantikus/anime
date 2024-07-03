import {Controller, useFormContext} from "react-hook-form";
import {Options} from "src/components/search-form-by-parameters/SearchFormTypes.ts";
import Select, {StylesConfig} from "react-select";
import {FC} from "react";

interface CustomSelectProps{
    placeholder: string,
    options: Readonly<Options[]>,
    styles: StylesConfig,
    selName: string
}

export const CustomSelect: FC<CustomSelectProps> = ({placeholder, options, styles, selName}) => {

    const {control} = useFormContext()

    return (
        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => {
                return <Select
                    isMulti={true}
                    onBlur={onBlur}
                    styles={styles}
                    selected={value}
                    options={options}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            }}
            name={selName}
        />
    )
}
