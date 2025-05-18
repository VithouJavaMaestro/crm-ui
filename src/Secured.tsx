import {useLazyGetUserInfoQuery, UserPrinciple} from "./api/oauth2ServerApi.ts";
import {useEffect, useState} from "react";
import {Loader} from "./component/Loader.tsx";
import {Outlet} from "react-router";
import {sendRedirect} from "./utils/redirect.ts";

export const Secured = () => {

    const [getUserInfo, {isFetching}] = useLazyGetUserInfoQuery();

    const [authenticated, setAuthenticated] = useState(false);


    useEffect(() => {
        getUserInfo()
            .unwrap()
            .then((response: UserPrinciple) => {
                if (response && response.sub) {
                    localStorage.setItem("auth_state", "authenticated");
                    setAuthenticated(true);
                }
            }).catch(() => {
            let authState = localStorage.getItem("auth_state");
            if (authState !== "login") {
                // to prevent infinite redirect
                localStorage.setItem("auth_state", "login");
                sendRedirect();
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