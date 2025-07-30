import { useState } from "react";
import { TransactionsContext } from "./TransactionsContext";
import type { TransactionsContextType } from "./TransactionsContext";


export const TransactionsProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [transaction, setTransaction] = useState<TransactionsContextType["transaction"]>([]);
    const [cardData, setCardData] = useState<TransactionsContextType["cardData"]>([]);
    const [paymentMethods, setPaymentMethods] = useState<TransactionsContextType["paymentMethods"]>([]);

    return (
        <TransactionsContext.Provider
            value={{
                transaction,
                cardData,
                paymentMethods,
                setTransaction,
                setCardData,
                setPaymentMethods,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    );
};