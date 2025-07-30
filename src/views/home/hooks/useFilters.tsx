import { useFiltersContext } from "@/context/filtersContext/useFiltersContext";
import type { FiltersState } from "@/models/filters.model";

const useFilters = (): {
    handleFilterChange: (
        value: string | number | "all",
        filterKey: keyof FiltersState
    ) => void;
    clearChipFilters: () => void;
    handleRangeFilter: (values: { min: number; max: number }) => void;
} => {
    // Context
    const { setFilters, setRangeFilter } = useFiltersContext();

    const handleFilterChange = (
        value: string | number | "all",
        filterKey: keyof FiltersState
    ) => {
        setFilters((prevFilters) => {
            // Obtener valores actuales
            const currentValues = prevFilters[filterKey]
                ? Array.isArray(prevFilters[filterKey])
                    ? prevFilters[filterKey]
                    : [prevFilters[filterKey]]
                : undefined;

            if (value === "all") {
                if (currentValues && currentValues.includes("all")) {
                    const newFilters = { ...prevFilters };
                    delete newFilters[filterKey];
                    return newFilters;
                }

                return {
                    ...prevFilters,
                    [filterKey]: ["all"],
                };
            }

            // sacar el vallor all
            if (currentValues && currentValues.includes("all")) {
                return {
                    ...prevFilters,
                    [filterKey]: [value],
                };
            }

            // Si el valor ya existe, lo removemos
            if (currentValues && currentValues.includes(value)) {
                const newValues = currentValues.filter((v) => v !== value);
                return {
                    ...prevFilters,
                    [filterKey]: newValues.length > 0 ? newValues : [],
                };
            }

            // Si no existe, lo agregamos
            return {
                ...prevFilters,
                [filterKey]: currentValues
                    ? [...currentValues, value]
                    : [value],
            };
        });
    };

    const handleRangeFilter = (values: { min: number; max: number }) => {
        setRangeFilter(values);
    };

    // limpiar los filtros de chips
    const clearChipFilters = () => {
        setFilters((prevFilters) => {
            const newFilters = { ...prevFilters };
            Object.keys(newFilters).forEach((key) => {
                if (
                    Array.isArray(newFilters[key]) &&
                    newFilters[key].length > 0
                ) {
                    delete newFilters[key];
                }
            });
            return newFilters;
        });
    };

    return {
        handleFilterChange,
        clearChipFilters,
        handleRangeFilter,
    };
};

export default useFilters;
