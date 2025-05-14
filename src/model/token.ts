export interface OAuth2AccessToken {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

export interface OAuth2AuthorizationCode {
    clientId: string,
    code: string,
    codeVerifier: string,
    codeChallenge: string
}
