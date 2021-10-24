import { Page } from "../pages/Letras";

import { routesProps } from "./types";

export const routes: routesProps[] = [
    { path: "/", exact: true, component: Page, isPrivate: false },
];
