import { useFiltersContext } from "@/context/filtersContext/useFiltersContext";
import { useTransactionsContext } from "@/context/transactionsContext/useTransactionsContext";
import type { Transaction } from "@/models/transaction.model";
import { useEffect, useMemo, useState } from "react";

const useListTransactions = (): {
    transactionsFiltered: Transaction[];
} => {
    // Context
    const { transaction } = useTransactionsContext();
    const { filters, activeFilters, rangeFilter, rangeDate } =
        useFiltersContext();

    // State
    const [transactionsFiltered, setTransactionsFiltered] = useState<
        Transaction[]
    >([]);

    // Memoized filter function
    const applyFilters = useMemo(() => {
        return (transactions: Transaction[]) => {
            // Si no hay filtros, devolvemos todas las transacciones
            if (Object.values(activeFilters).every((v) => !v)) {
                return transactions;
            }

            return transactions.filter((transaction) => {
                // Filtro por tarjeta
                if (
                    filters.card &&
                    filters.card.length > 0 &&
                    activeFilters.card
                ) {
                    if (!filters.card.includes(transaction.card)) {
                        return false;
                    }
                }

                // Filtro por cuotas
                if (
                    filters.quotes &&
                    filters.quotes.length > 0 &&
                    activeFilters.quotes
                ) {
                    if (!filters.quotes.includes(transaction.installments)) {
                        return false;
                    }
                }

                // Filtro por método de pago
                if (
                    filters.paymentMethods &&
                    filters.paymentMethods.length > 0 &&
                    activeFilters.paymentMethods
                ) {
                    if (
                        !filters.paymentMethods.includes(
                            transaction.paymentMethod
                        )
                    ) {
                        return false;
                    }
                }

                // Filtro por monto
                if (
                    rangeFilter.min !== undefined &&
                    rangeFilter.max !== undefined
                ) {
                    const amount = transaction.amount;
                    if (amount < rangeFilter.min || amount > rangeFilter.max) {
                        return false;
                    }
                }

                // // Filtro por fecha
                if (rangeDate && activeFilters.date) {
                    const transactionDate = new Date(transaction.createdAt);
                    const from = rangeDate.from
                        ? new Date(rangeDate.from)
                        : null;
                    const to = rangeDate.to ? new Date(rangeDate.to) : null;

                    if (from && transactionDate < from) return false;
                    if (to && transactionDate > to) return false;
                }

                return true;
            });
        };
    }, [filters, activeFilters, rangeFilter, rangeDate]);

    // Effects
    useEffect(() => {
        const filtered = applyFilters(transaction);
        setTransactionsFiltered(filtered);
    }, [transaction, applyFilters]);

    return {
        transactionsFiltered,
    };
};

export default useListTransactions;
