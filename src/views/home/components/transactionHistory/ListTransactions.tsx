import styled from "@emotion/styled";
import CardTransaction from "./CardTransaction";
import type { Transaction } from "@/models/transaction.model";
import useListTransactions from "../../hooks/useListTransactions";
import NotFoundTransactions from "./NotFoundTransactions";

interface ListTransactionsStyles {
    heightPayments: number | undefined;
}

const ListTransactions = () => {
    // Context

    // Hooks
    const { transactionsFiltered } = useListTransactions();

    // Altura del componente hermano
    const myPaymentsHeight =
        document.getElementById("my-payments")?.clientHeight;

    return (
        <Wrapper heightPayments={myPaymentsHeight}>
            {transactionsFiltered.length === 0 ? (
                <NotFoundTransactions />
            ) : (
                <>
                    {transactionsFiltered.map((transaction: Transaction) => (
                        <CardTransaction
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))}
                </>
            )}
        </Wrapper>
    );
};

export default ListTransactions;

const Wrapper = styled.div<ListTransactionsStyles>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(
        68vh - ${(props: ListTransactionsStyles) => props.heightPayments}px
    );
    overflow-y: auto;

    .card-transaction {
        border-bottom: solid 1px #dee2ec;
    }
    .card-transaction:last-child {
        border-bottom: none;
    }
`;
