import { memo } from "react";
import { Route, Redirect } from "react-router-dom";

import { routesProps } from "../../routes/types";

function RouteWrapper(props: routesProps) {
    const { isPrivate = false, path } = props;

    const token = true;

    if (isPrivate && !token) {
        return <Redirect to="/" from={path} />;
    }
    return <Route {...props} />;
}

export default memo(RouteWrapper);
