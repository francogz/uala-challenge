import HeaderTransactions from "./HeaderTransactions";
import ListTransactions from "./ListTransactions";

const TransactionHistory = () => {

    return (
        <div className="section">
            <HeaderTransactions />
            <ListTransactions  />
        </div>
    );
};

export default TransactionHistory;
