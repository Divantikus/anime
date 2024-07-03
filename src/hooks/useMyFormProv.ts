import {FieldValues, useForm} from "react-hook-form";

export const useMyFormProv = <FormType extends FieldValues>() => {
    const methods = useForm<FormType>({
        mode: "onBlur",
    })
    return {
        methods: methods,
        ...methods
    }
}