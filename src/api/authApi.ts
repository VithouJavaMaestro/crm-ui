import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {config} from "../env.ts";
import {OAuth2AccessToken, OAuth2AuthorizationCode} from "../model/token.ts";

export const authBaseQuery = fetchBaseQuery({
    baseUrl: config.VITE_AUTH_SERVER_URI
})

export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['Auth'],
    baseQuery: authBaseQuery,
    endpoints: (build) => ({
        getOAuth2AccessToken: build.mutation<OAuth2AccessToken, OAuth2AuthorizationCode>({
            query: (body) => {
                const params = new URLSearchParams({
                    client_id: body.clientId,
                    grant_type: "authorization_code",
                    code: body.code,
                    code_verifier: body.codeVerifier,
                    code_challenge: body.codeChallenge,
                    redirect_uri: window.location.origin,
                }).toString();
                return {
                    url: "/oauth2/token",
                    body: params,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            },
            transformResponse: (response: { access_token: string, refresh_token: string, expires_in: number }) => ({
                refreshToken: response.refresh_token,
                accessToken: response.access_token,
                expiresIn: response.expires_in
            })
        }),
        renewAccessToken: build.mutation<OAuth2AccessToken, string>({
            query: (body) => {
                const form = new URLSearchParams({
                    client_id: "crm",
                    grant_type: "refresh_token",
                    refresh_token: body
                })
                return {
                    url: '/oauth2/token',
                    method: 'POST',
                    form,
                }
            },
            transformResponse: (response: { access_token: string, refresh_token: string, expires_in: number }) => {
                return {
                    refreshToken: response.refresh_token,
                    accessToken: response.access_token,
                    expiresIn: response.expires_in
                }
            },
        })
    })
})

export const {
    useRenewAccessTokenMutation,
    useGetOAuth2AccessTokenMutation
} = authApi;