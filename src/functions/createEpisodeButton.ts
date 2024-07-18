export interface SelectOption {
    value: string;
    label: string;
}
type CreateEpisodeButtonType = (episodes: number) => SelectOption[];

export const createEpisodeButton: CreateEpisodeButtonType = (episodes) => {
    const selectOptions: SelectOption[] = [];
    for (let episodeNumber = 1; episodeNumber <= episodes; episodeNumber++) {
        selectOptions.push({
            label: 'Серия' + ' ' + episodeNumber,
            value: episodeNumber.toString(),
        });
    }
    console.log(selectOptions);
    return selectOptions;
};
