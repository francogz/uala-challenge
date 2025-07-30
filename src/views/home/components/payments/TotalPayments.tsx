import TabsTotalPayments from "./TabsTotalPayments";
import styled from "@emotion/styled";
import MetricsIcon2 from "@/assets/icons/MetricsIcon2";

interface TotalPaymentsProps {
    activeTab: number;
    handleTab: (tab: number) => void;
    calculatePayments: (tab: number) => number;
}

const TotalPayments = (props: TotalPaymentsProps) => {
    const { activeTab, calculatePayments, handleTab } = props;

    const formattedAmount = new Intl.NumberFormat("es-AR", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(calculatePayments(activeTab));

    const [integerPart, decimalPart] = formattedAmount.split(",");

    return (
        <div className="section">
            <TabsTotalPayments activeTab={activeTab} handleTab={handleTab} />
            <Amount>
                +${integerPart}
                <span>,{decimalPart}</span>
            </Amount>
            <Button>
                <MetricsIcon2 color="#022A9A" />
                Ver métricas
            </Button>
        </div>
    );
};

export default TotalPayments;

const Amount = styled.p`
    font-size: 2.125rem;
    font-weight: 250;
    color: var(--text-dark);
    text-align: center;

    span {
        font-size: 1.375rem;
    }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: fit-content;
    border-radius: 24px;
    background-color: transparent;
    border: none;
    color: #022a9a;
    font-weight: 100;
    font-size: 0.875rem;
    cursor: pointer;
    padding: 0.35rem 1rem;

    :hover {
        color: #fff;
        background-color: #0146c6;
        path {
            fill: #fff;
        }
    }
`;
