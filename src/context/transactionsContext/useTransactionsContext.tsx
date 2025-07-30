import { useContext } from "react";
import { TransactionsContext } from "./TransactionsContext";

export const useTransactionsContext = () => {
    const context = useContext(TransactionsContext);

    if (!context) {
        throw new Error("error");
    }

    return context;
};
