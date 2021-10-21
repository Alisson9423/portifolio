import { Page } from "../pages/Home";

import { routesProps } from "./types";

export const routes: routesProps[] = [
    { path: "/", exact: true, component: Page, isPrivate: false },
];
