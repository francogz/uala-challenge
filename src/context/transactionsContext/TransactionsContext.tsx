import { createContext } from "react";
import type { CardElement, Transaction } from "@/models/transaction.model";

export interface TransactionsContextType {
    transaction: Transaction[] | [];
    cardData: CardElement[] | [];
    paymentMethods: CardElement[] | [];
    setTransaction: (transaction: Transaction[] | []) => void;
    setCardData: (cardData: CardElement[] | []) => void;
    setPaymentMethods: (paymentMethods: CardElement[] | []) => void;
}

export const TransactionsContext = createContext<TransactionsContextType | undefined>(undefined);