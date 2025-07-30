import styled from "@emotion/styled";
import TotalPayments from "./TotalPayments";
import { useState } from "react";
import useDatesTransactions from "../../hooks/useDatesTransactions";

const Payments = () => {
    // States
    const [activeTab, setActiveTab] = useState<number>(1);

    // Hooks
    const { calculatePayments } = useDatesTransactions();

    // Functions
    const handleTab = (tab: number) => {
        setActiveTab(tab);
    };

    return (
        <div className="section" id="my-payments">
            <Title>Tus cobros</Title>
            <TotalPayments
                calculatePayments={calculatePayments}
                activeTab={activeTab}
                handleTab={handleTab}
            />
        </div>
    );
};

export default Payments;

const Title = styled.h2`
    width: 100%;
    font-size: 1rem;
    color: #3a3a3a;
    text-align: start;
    font-weight: 600;
    padding: 0 45px;
    align-self: center;

    @media (max-width: 480px) {
        padding: 0 25px;
    `;
