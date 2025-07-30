import StoreIcon from "@/assets/icons/StoreIcon";
import { useTransactionsContext } from "@/context/transactionsContext/useTransactionsContext";
import type { Transaction } from "@/models/transaction.model";
import styled from "@emotion/styled";

interface TextStyleProps {
    color: string;
    fs: string;
    fw: string;
}

interface ColProps {
    alignItems: string;
}

interface CardTransactionProps {
    transaction: Transaction;
}

const CardTransaction = (props: CardTransactionProps) => {
    const { transaction } = props;

    // Context
    const { paymentMethods } = useTransactionsContext();

    const transformPaymentMethod = (value: string) => {
        const method = paymentMethods.find(
            (method) => method.value.toString() === value.toString()
        );

        return method ? method.label : value;
    };

    return (
        <Card className="card-transaction">
            <LeftContainer>
                <Icon>
                    <StoreIcon color="#1C8367" />
                </Icon>
                <Col alignItems="flex-start">
                    <Text fs="0.875rem" fw="600" color="#313643">
                        {transformPaymentMethod(
                            transaction?.paymentMethod || ""
                        )}
                    </Text>
                    <Text fs="0.875rem" fw="100" color="606882">
                        Venta
                    </Text>
                </Col>
            </LeftContainer>
            <Col alignItems="flex-end">
                <Text fs="0.875rem" fw="600" color="#1C8367">
                    +${transaction?.amount}
                </Text>
                <Text fs="0.875rem" fw="100" color="606882">
                    {new Date(transaction?.createdAt).toLocaleDateString()}
                </Text>
            </Col>
        </Card>
    );
};

export default CardTransaction;

const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 8px;
`;

const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const Icon = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: solid 2px #1c8367;
`;
const Col = styled.div<ColProps>`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.alignItems};
    gap: 4px;
`;

const Text = styled.span<TextStyleProps>`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fs};
    font-weight: ${(props) => props.fw};
`;
