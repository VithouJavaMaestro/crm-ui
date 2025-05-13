import {Outlet} from "react-router";
import {useEffect, useState} from "react";
import {useErrorBoundary} from "react-error-boundary";
import {getOAuth2AccessToken} from "./api/authApi.ts";
import {CODE_CHALLENGE, CODE_VERIFIER} from "./page/constants/oidc.ts";
import {setToken} from "./worker/tokenWorker.ts";
import {sendRedirect} from "./utils/redirect.ts";

export const Secured = () => {


    const [loading, setLoading] = useState(true);
    const {showBoundary} = useErrorBoundary();

    const [authenticated, setAuthenticated] = useState(false);

    const [error, setError] = useState({
        status: 500,
        message: "Something went wrong.",
        hasError: false
    });


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        if (params.has("error")) {
            setError({
                status: 500,
                message: "Not working at all.",
                hasError: true
            });
            setLoading(false);
            return;
        }

        const code = params.get("code");

        if (code) {

            const codeVerifier = sessionStorage.getItem(CODE_VERIFIER);
            const codeChallenge = sessionStorage.getItem(CODE_CHALLENGE);

            if (!(codeChallenge && codeVerifier)) {
                setLoading(false);
                setError({...error, status: 403, hasError: true});
                return;
            }

            const cleanUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, "", cleanUrl);

            getOAuth2AccessToken({
                clientId: "crm",
                code: code,
                codeChallenge: codeChallenge,
                codeVerifier: codeVerifier
            }).then((res) => {
                setAuthenticated(true);
                const data = res.data;
                setToken({
                    accessToken: data.access_token,
                    refreshToken: data.refresh_token,
                    expiresIn: data.expires_in,
                });
            }).catch(err => {
                console.log(err);
                setError({hasError: true, message: err.message, status: err.status});
            }).finally(() => setLoading(false));

        } else {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    if (authenticated) {
        return <Outlet/>;
    } else {
        if (error.hasError) {
            showBoundary(error);
        } else {
            sendRedirect();
            return null;
        }
    }
}