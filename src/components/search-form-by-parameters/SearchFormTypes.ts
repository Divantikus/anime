export interface Options{
    value: string,
    label: string
}

export interface SeasonOptions extends Options{
    value: "winter" | "summer" | "autumn" | "spring"
}

export type DataFromForm = {
    choiceGenres: Options[]
    chooseSeason: SeasonOptions[],
    chooseYear: Options[],
    releaseIsOver: boolean,
    isNew: boolean,
    page: number,
}


