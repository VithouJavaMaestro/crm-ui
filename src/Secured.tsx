import {useEffect, useState} from "react";
import {Loader} from "./component/Loader.tsx";
import {Outlet} from "react-router";
import {sendRedirect} from "./utils/redirect.ts";
import {useErrorBoundary} from "react-error-boundary";
import {useLazyMeQuery, User} from "./api/userApi.ts";

export const Secured = () => {

    const [me, {isFetching}] = useLazyMeQuery();

    const [authenticated, setAuthenticated] = useState(false);

    const {showBoundary} = useErrorBoundary();

    useEffect(() => {
        me()
            .unwrap()
            .then((response: User) => {
                setAuthenticated(true);
            }).catch((error) => {
            if (error.status === 401) {
                sendRedirect();
            } else {
                showBoundary({
                    status: 500,
                })
            }
        })

    }, []);

    if (isFetching) {
        return <Loader open={true}/>;
    }


    if (authenticated) {
        return <Outlet/>
    }
}