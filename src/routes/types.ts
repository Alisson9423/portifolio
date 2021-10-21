export interface routesProps {
    path: string;
    exact: boolean | undefined;
    component: React.ComponentType<any>;
    isPrivate: boolean;
}
