import axios from "axios";
import {config} from "../env.ts";
import {Object} from "../utils/shared.ts";


interface OAuthAuthorizationRequest {
    clientId: string,
    code: string,
    codeVerifier: string,
    codeChallenge: string,
}


interface RenewAuthAuthorizationRequest {
    clientId: string,
    refreshToken: string,
}

export interface OAuth2Token {
    accessToken: string,
    refreshToken: string,
    expiresIn: number
}

export const getOAuth2AccessToken = async (request: OAuthAuthorizationRequest): Promise<Object> => {
    const params = new URLSearchParams({
        client_id: request.clientId,
        grant_type: "authorization_code",
        code: request.code,
        code_verifier: request.codeVerifier,
        code_challenge: request.codeChallenge,
        redirect_uri: window.location.origin,
    });
    return await authApi.post(`/oauth2/token`, params.toString());
}

export const renewOAuth2AccessToken = async (request: RenewAuthAuthorizationRequest): Promise<Object> => {
    const params = new URLSearchParams({
        client_id: request.clientId,
        grant_type: "refresh_token",
        refresh_token: request.refreshToken
    });
    return await authApi.post(`/oauth2/token`, params.toString());
}

export const authApi = axios.create(({
    baseURL: config.VITE_AUTH_SERVER_URI
}));

