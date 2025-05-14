import {useEffect, useState} from "react";
import {CODE_CHALLENGE, CODE_VERIFIER} from "./page/constants/oidc.ts";
import {sendRedirect} from "./utils/redirect.ts";
import {useGetOAuth2AccessTokenMutation} from "./api/authApi.ts";
import {Outlet} from "react-router";
import {setToken} from "./worker/tokenWorker.ts";
import {useErrorBoundary} from "react-error-boundary";

export const Secured = () => {

    const [trigger, {isLoading}] = useGetOAuth2AccessTokenMutation();

    const [authReady, setAuthReady] = useState(false);

    const {showBoundary} = useErrorBoundary();


    useEffect(() => {
        console.log(isLoading);
        const params = new URLSearchParams(window.location.search);

        const code = params.get("code");

        if (code) {

            const codeVerifier = sessionStorage.getItem(CODE_VERIFIER);
            const codeChallenge = sessionStorage.getItem(CODE_CHALLENGE);

            if (!(codeChallenge && codeVerifier)) {
                showBoundary({
                    message: "Something went wrong",
                })
                return;
            }

            const cleanUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, "", cleanUrl);


            trigger({
                clientId: "crm",
                code: code,
                codeChallenge: codeChallenge,
                codeVerifier: codeVerifier
            }).unwrap()
                .then(data => {
                    console.log(data.refreshToken)
                    setToken(data);
                    setAuthReady(true);
                }).catch(error => {
                showBoundary(error);
            });
        } else if (params.has("error")) {
            showBoundary({
                message: "Something went wrong.",
            });
        } else {
            sendRedirect();
        }
    }, []);

    if (!authReady) {
        return null;
    }

    return <Outlet/>
}