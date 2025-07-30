import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TransactionData } from "@/models/transaction.model";
import { transactionAdapter } from "@/adapters/transaction.adapter";

export const transactionsApi = createApi({
    reducerPath: "transactionsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
    }),
    endpoints: (builder) => ({
        getTransactions: builder.query<TransactionData, void>({
            query: () => "/transactions.json",
            transformResponse: (response: TransactionData): TransactionData => {
                return transactionAdapter(response);
            },
        }),
    }),
});

export const { useGetTransactionsQuery } = transactionsApi;
