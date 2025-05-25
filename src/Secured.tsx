import {useLazyGetUserInfoQuery, UserPrinciple} from "./api/oauth2ServerApi.ts";
import {useEffect, useState} from "react";
import {Loader} from "./component/Loader.tsx";
import {Outlet} from "react-router";
import {sendRedirect} from "./utils/redirect.ts";
import {useErrorBoundary} from "react-error-boundary";

export const Secured = () => {

    const [getUserInfo, {isFetching}] = useLazyGetUserInfoQuery();

    const [authenticated, setAuthenticated] = useState(false);

    const {showBoundary} = useErrorBoundary();

    useEffect(() => {
        getUserInfo()
            .unwrap()
            .then((response: UserPrinciple) => {
                if (response && response.sub) {
                    localStorage.setItem("auth_state", "authenticated");
                    setAuthenticated(true);
                }
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