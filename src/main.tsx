import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { TransactionsProvider } from "./context/transactionsContext/TransactionsProvider.tsx";
import { FiltersProvider } from "./context/filtersContext/FiltersProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <TransactionsProvider>
                <FiltersProvider>
                    <App />
                </FiltersProvider>
            </TransactionsProvider>
        </Provider>
    </StrictMode>
);
