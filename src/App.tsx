// import "./App.css";
import { BrowserRouter } from "react-router";
import Router from "./routes/Router";

function App() {

    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Router />
        </BrowserRouter>
    );
}

export default App;
