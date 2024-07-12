import {Dispatch, SetStateAction} from "react";
import {ReleasesData} from "src/services/types/DataFromServerTypes.ts";

export interface PageSelectionButtonsProps {
    setCurrentPage: Dispatch<SetStateAction<number>>,
    currentPage: number,
    data: ReleasesData,
}