import axios from "axios";
import {config} from "../env.ts";


interface OAuthAuthorizationRequest {
    clientId: string,
    code: string,
    codeVerifier: string,
    codeChallenge: string,
}

export const getOAuth2AccessToken = async (request: OAuthAuthorizationRequest): Promise<any> => {

    const params = new URLSearchParams({
        client_id: request.clientId,
        grant_type: "authorization_code",
        code: request.code,
        code_verifier: request.codeVerifier,
        code_challenge: request.codeChallenge,
        redirect_uri: window.location.origin,
    });

    return await axiosInstance.post(`/oauth2/token`, params.toString());
}

export const axiosInstance = axios.create(({
    baseURL: config.VITE_AUTH_SERVER_URI
}));

