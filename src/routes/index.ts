import { PageMusic } from "../pages/Music";
import { FinancialControl } from "../pages/FinancialControl";
import { PageTextReader } from "../pages/TextReader";
import { PagePokedex } from "../pages/Pokedex";

import { routesProps } from "./types";

export const routes: routesProps[] = [
    { path: "/", exact: true, component: PageMusic, isPrivate: false },
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
    {
        path: "/pokedex",
        exact: true,
        component: PagePokedex,
        isPrivate: false,
    },
];
