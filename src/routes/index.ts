import { PageMusic } from "../pages/Music";
import { FinancialControl } from "../pages/FinancialControl";
import { PageTextReader } from "../pages/TextReader";

import { routesProps } from "./types";

export const routes: routesProps[] = [
    { path: "/music", exact: true, component: PageMusic, isPrivate: false },
    {
        path: "/financial-control",
        exact: true,
        component: FinancialControl,
        isPrivate: false,
    },
    {
        path: "/text-reader",
        exact: true,
        component: PageTextReader,
        isPrivate: false,
    },
];
