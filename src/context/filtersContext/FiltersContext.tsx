import { createContext } from "react";
import type { FiltersState } from "@/models/filters.model";
import type { DateRange } from "react-day-picker";

export interface FiltersContextType {
    filters: FiltersState;
    rangeFilter: {
        min: number;
        max: number;
    };
    activeFilters: { [key: string]: boolean };
    rangeDate: DateRange  | undefined;
    setFilters: (updater: (prev: FiltersState) => FiltersState) => void;
    setRangeFilter: (rangeFilter: { min: number; max: number }) => void;
    setActiveFilters: (
        updater: (prev: { [key: string]: boolean }) => {
            [key: string]: boolean;
        }
    ) => void;
    setRangeDate: (rangeDate: DateRange | undefined) => void;
}

export const FiltersContext = createContext<FiltersContextType | undefined>(
    undefined
);
