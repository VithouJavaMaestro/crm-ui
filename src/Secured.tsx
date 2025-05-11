import {useAppDispatch, useAppSelector} from "./apps/hooks.ts";
import {Outlet} from "react-router";
import {useEffect, useState} from "react";
import {config} from "./env.ts";
import {useErrorBoundary} from "react-error-boundary";
import {generateCodeVerifier, generatePkceChallenge} from "./utils/pkce.ts";
import {getOAuth2AccessToken} from "./api/authApi.ts";
import {
    CLIENT_ID,
    CODE_CHALLENGE,
    CODE_CHALLENGE_METHOD,
    CODE_VERIFIER,
    REDIRECT_URI,
    RESPONSE_TYPE
} from "./page/constants/oidc.ts";
import {setOAuth2Token, setUserPrincipal} from "./apps/slice/authentication.ts";
import {setCookie} from "./utils/cookie.ts";

export const Secured = () => {

    const authentication = useAppSelector(state => state.authentication);
    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(true);
    const {showBoundary} = useErrorBoundary();

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
            }).then(res => {
                dispatch(setOAuth2Token({
                    accessToken: res.data.access_token,
                    refreshToken: res.data.refresh_token,
                    expiresIn: res.data.expires_in,
                }));
                dispatch(setUserPrincipal({
                    authenticated: true
                }));
                setCookie("renew", res.data.access_token, "strict", true);
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

    if (authentication.authenticated) {
        return <Outlet/>;
    } else {
        if (error.hasError) {
            showBoundary(error);
        } else {
            const codeVerifier = generateCodeVerifier(96);
            generatePkceChallenge("S256", codeVerifier)
                .then(value => {
                    const url = new URL("/oauth2/authorize", config.VITE_AUTH_SERVER_URI);
                    url.searchParams.append(CODE_CHALLENGE_METHOD, "S256");
                    url.searchParams.append(RESPONSE_TYPE, "code");
                    url.searchParams.append(REDIRECT_URI, window.location.origin);
                    url.searchParams.append(CLIENT_ID, "crm");
                    url.searchParams.append(CODE_CHALLENGE, value);
                    sessionStorage.setItem(CODE_VERIFIER, codeVerifier);
                    sessionStorage.setItem(CODE_CHALLENGE, value);
                    window.location.href = url.toString();
                })
            return null;
        }
    }
}