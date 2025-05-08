import {useAppDispatch, useAppSelector} from "./apps/hooks.ts";
import {Outlet} from "react-router";
import {useEffect, useState} from "react";
import {setOAuth2Token, setUserPrincipal} from "./apps/slice/authentication.ts";
import axios from "axios";

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
            axios.post("http://localhost:9000/token", null, {
                params: {
                    registration_id: registrationId,
                    code: code,
                    state: state
                }
            }).then(res => {
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
        window.location.href = "http://localhost:9000/login/default";
        return null;
    }
}