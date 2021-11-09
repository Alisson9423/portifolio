import { Music } from "../pages/Music";

import { routesProps } from "./types";

export const routes: routesProps[] = [
    { path: "/music", exact: true, component: Music, isPrivate: false },
    // { path: "/music", exact: true, component: Page, isPrivate: false },
];
