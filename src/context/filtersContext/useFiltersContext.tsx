import { useContext } from "react";
import { FiltersContext } from "./FiltersContext";

export const useFiltersContext = () => {
    const context = useContext(FiltersContext);

    if (!context) {
        throw new Error("error");
    }

    return context;
};
