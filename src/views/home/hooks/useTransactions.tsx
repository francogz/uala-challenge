import { useTransactionsContext } from "@/context/transactionsContext/useTransactionsContext";
import { useGetTransactionsQuery } from "@/redux/api/transactionsApi";
import { useEffect } from "react";

const useTransactions = (): {
    isErrorTransactions: boolean;
    isLoadingTransactions: boolean;
    refetchTransactions: () => void;
} => {
    // Context
    const { setCardData, setPaymentMethods, setTransaction } =
        useTransactionsContext();
    // Api
    const {
        data: dataTransactions,
        isLoading: isLoadingTransactions,
        isError: isErrorTransactions,
        isSuccess: isSuccessTransactions,
        refetch: refetchTransactions,
    } = useGetTransactionsQuery();

    // Effects
    useEffect(() => {
        if (!dataTransactions || !isSuccessTransactions) return;

        setTransaction(dataTransactions?.transactions);
        setCardData(dataTransactions?.metadata?.cards);
        setPaymentMethods(dataTransactions?.metadata?.paymentMethods);
    }, [
        dataTransactions,
        isSuccessTransactions,
        setCardData,
        setPaymentMethods,
        setTransaction,
    ]);

    return {
        isLoadingTransactions,
        isErrorTransactions,
        refetchTransactions,
    };
};

export default useTransactions;
