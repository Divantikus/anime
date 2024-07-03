export interface Options{
    value: string,
    label: string
}

export interface SeasonOptions extends Options{
    value: "winter" | "summer" | "autumn" | "spring"
}

export interface DataFromForm{
    choiceGenres: Options[]
    chooseSeason: SeasonOptions[],
    chooseYear: Options[],
    releaseIsOver: boolean,
    isNew: boolean,
}


