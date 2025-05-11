import {setOAuth2Token, setUserPrincipal} from "../apps/slice/authentication.ts";

export const handleAccessTokenResponse = (promise: Promise<any>, dispatch: any, setLoading: (v: boolean) => void): void => {
    promise
        .then(res => {
            dispatch(setOAuth2Token({
                accessToken: res.data.access_token,
                refreshToken: res.data.refresh_token,
                expiresIn: res.data.expires_in,
            }));
            dispatch(setUserPrincipal({
                authenticated: true
            }))
        }).catch(err => {
        console.log(err);
    }).finally(() => setLoading(false));
}