import styled from "@emotion/styled";

interface TabsTotalPaymentsProps {
    activeTab: number;
    handleTab: (tab: number) => void;
}

interface TabStyle {
    active: boolean;
}

const TabsTotalPayments = (props: TabsTotalPaymentsProps) => {
    const { activeTab, handleTab } = props;

    return (
        <Tabs>
            <Tab active={activeTab === 0} onClick={() => handleTab(0)}>
                <p>Diario</p>
                {activeTab === 0 && <Dot />}
            </Tab>
            <Tab active={activeTab === 1} onClick={() => handleTab(1)}>
                <p>Semanal</p>
                {activeTab === 1 && <Dot />}
            </Tab>
            <Tab active={activeTab === 2} onClick={() => handleTab(2)}>
                <p>Mensual</p>
                {activeTab === 2 && <Dot />}
            </Tab>
        </Tabs>
    );
};

export default TabsTotalPayments;

const Tabs = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Tab = styled.div<TabStyle>`
    display: flex;
    flex: 1;
    padding: 15px;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    p {
        font-size: 1rem;
        font-weight: ${(props) => (props.active ? "600" : "100")};
        color: #565656;
    }
`;

const Dot = styled.div`
    width: 8px;
    height: 8px;
    background-color: #032a9b;
    border-radius: 50%;
    border: 1px solid #3564fd;
`;
