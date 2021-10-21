import { BrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { SwitchRoutes } from "./components/SwitchRoutes";

import { GlobalStyle } from "./styles/global";

export function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <SwitchRoutes routes={routes} />
            </BrowserRouter>
        </>
    );
}
