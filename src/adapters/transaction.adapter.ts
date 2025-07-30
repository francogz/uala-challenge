import type {
    CardElement,
    Transaction,
    TransactionData,
} from "@/models/transaction.model";

export const transactionAdapter = (data: TransactionData): TransactionData => {
    return {
        transactions: data.transactions.map(
            (t: Transaction): Transaction => ({
                ...t,
                createdAt: t.createdAt,
                updatedAt: t.updatedAt,
            })
        ),
        metadata: {
            cards: data.metadata.cards.map(
                (card: CardElement): CardElement => ({
                    value: card.value,
                    label: card.label,
                })
            ),
            paymentMethods: data.metadata.paymentMethods.map(
                (method: CardElement): CardElement => ({
                    value: method.value,
                    label: method.label,
                })
            ),
        },
    };
};
