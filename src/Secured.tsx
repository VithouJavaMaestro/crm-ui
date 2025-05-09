import {useAppDispatch, useAppSelector} from "./apps/hooks.ts";
import {Outlet} from "react-router";
import {useEffect, useState} from "react";
import {setOAuth2Token, setUserPrincipal} from "./apps/slice/authentication.ts";
import {oauth2Token} from "./api/authApi.ts";
import {config} from "./env.ts";

export const Secured = () => {
    const authentication = useAppSelector(state => state.authentication);
    const dispatch = useAppDispatch();

    const params = new URLSearchParams(window.location.search);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, "", cleanUrl);

        const registrationId = "default";
        const code = params.get("code");
        const state = params.get("state");

        if (code && registrationId && state) {
            oauth2Token(code, registrationId, state).then(res => {
                dispatch(setOAuth2Token({
                    accessToken: res.data.access_token,
                    refreshToken: res.data.refresh_token,
                    expiresIn: res.data.expires_in,
                }));
                dispatch(setUserPrincipal({
                    authenticated: true
                }))
                setLoading(false);
            }).catch(err => {
                console.log(err);
                setLoading(false);
            });
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
        window.location.href = config.VITE_API_BASE_URI + "/login/default";
        return null;
    }
}