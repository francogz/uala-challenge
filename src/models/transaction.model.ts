export interface TransactionData {
    transactions: Transaction[];
    metadata: Metadata;
}

export interface Metadata {
    cards: CardElement[];
    paymentMethods: CardElement[];
}

export interface CardElement {
    value: string | number;
    label: string | number;
}

export interface Transaction {
    id: string;
    amount: number;
    card: CardEnum;
    installments: number;
    createdAt: Date;
    updatedAt: Date;
    paymentMethod: PaymentMethod;
}

export type CardEnum = "amex" | "mastercard" | "visa";

export type PaymentMethod = "link" | "mpos" | "pospro" | "qr";
