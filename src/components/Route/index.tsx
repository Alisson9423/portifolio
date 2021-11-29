import { memo } from "react";
import { Route, Redirect } from "react-router-dom";

import { routesProps } from "../../routes/types";
import TemporaryDrawer from "../Menu";

function RouteWrapper(props: routesProps) {
    const { isPrivate = false, path } = props;

    const token = true;

    if (isPrivate && !token) {
        return <Redirect to="/" from={path} />;
    }
    return (
        <>
            <Route {...props} />
            <TemporaryDrawer />
        </>
    );
}

export default memo(RouteWrapper);
