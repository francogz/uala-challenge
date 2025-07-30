import styled from "@emotion/styled";
import Payments from "./components/payments/Payments";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import useTransactions from "./hooks/useTransactions";
import SplashScreen from "@/components/common/SplashScreen";

const HomeView = () => {
    const { isLoadingTransactions, isErrorTransactions } = useTransactions();

    return (
        <Wrapper>
            {isLoadingTransactions ? (
                <SplashScreen />
            ) : isErrorTransactions ? (
                <p>Ocurrió un error</p>
            ) : (
                <>
                    <Payments />
                    <TransactionHistory />
                </>
            )}
        </Wrapper>
    );
};

export default HomeView;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 440px;
`;
