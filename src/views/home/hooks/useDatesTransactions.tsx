import { useTransactionsContext } from "@/context/transactionsContext/useTransactionsContext";
import type { Transaction } from "@/models/transaction.model";

const useDatesTransactions = (): {
    calculatePayments: (tab: number) => number;
} => {
    // Context
    const { transaction } = useTransactionsContext();

    // Functions
    const getTodayTotalAmount = (data: Transaction[]) => {
        const today = new Date();
        const todayDay = today.getDate();
        const todayMonth = today.getMonth();
        const todayYear = today.getFullYear();

        const total = data.reduce((sum, item) => {
            const itemDate = new Date(item.createdAt);
            if (
                itemDate.getDate() === todayDay &&
                itemDate.getMonth() === todayMonth &&
                itemDate.getFullYear() === todayYear
            ) {
                return sum + item.amount;
            }
            return sum;
        }, 0);

        return total;
    };

    const getWeeklyTotalAmount = (data: Transaction[]) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - (today.getDay() || 7) + 1);

        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        weekEnd.setHours(23, 59, 59, 999);

        return data.reduce((sum, item) => {
            const itemDate = new Date(item.createdAt);
            return itemDate >= weekStart && itemDate <= weekEnd
                ? sum + item.amount
                : sum;
        }, 0);
    };

    const getMonthlyTotalAmount = (data: Transaction[]) => {
        const today = new Date();
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);

        const total = data.reduce((sum, item) => {
            const itemDate = new Date(item.createdAt);
            if (itemDate >= monthStart && itemDate <= today) {
                return sum + item.amount;
            }
            return sum;
        }, 0);

        return total;
    };

    const calculatePayments = (tab: number) => {
        if (tab === 0) {
            return getTodayTotalAmount(transaction);
        }

        if (tab === 1) {
            return getWeeklyTotalAmount(transaction);
        }

        if (tab === 2) {
            return getMonthlyTotalAmount(transaction);
        }

        return 0;
    };

    return {
        calculatePayments,
    };
};

export default useDatesTransactions;
