import { Switch } from "react-router-dom";
import { routesProps } from "../../routes/types";
import Route from "../Route";

interface SwitchRoutesProps {
    routes: routesProps[];
}

export function SwitchRoutes(props: SwitchRoutesProps) {
    const { routes } = props;

    return (
        <Switch>
            {routes.map((props, index) => {
                return <Route {...props} key={index} />;
            })}
        </Switch>
    );
}
