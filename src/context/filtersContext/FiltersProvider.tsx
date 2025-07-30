import { useState } from "react";
import type { FiltersContextType } from "./FiltersContext";
import { FiltersContext } from "./FiltersContext";

export const FiltersProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    // State
    const [filters, setFilters] = useState<FiltersContextType["filters"]>({});

    const [rangeFilter, setRangeFilter] = useState<
        FiltersContextType["rangeFilter"]
    >({
        min: 0,
        max: 2000,
    });

    const [activeFilters, setActiveFilters] = useState<
        FiltersContextType["activeFilters"]
    >({
        date: false,
        card: false,
        quotes: false,
        amount: false,
        paymentMethods: false,
    });

    const [rangeDate, setRangeDate] =
        useState<FiltersContextType["rangeDate"]>(undefined);
    return (
        <FiltersContext.Provider
            value={{
                filters,
                rangeFilter,
                activeFilters,
                rangeDate,
                setFilters,
                setRangeFilter,
                setActiveFilters,
                setRangeDate,
            }}
        >
            {children}
        </FiltersContext.Provider>
    );
};
