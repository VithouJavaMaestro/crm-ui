import {generateCodeVerifier, generatePkceChallenge} from "./pkce.ts";
import {config} from "../env.ts";
import {
    CLIENT_ID,
    CODE_CHALLENGE,
    CODE_CHALLENGE_METHOD,
    CODE_VERIFIER,
    REDIRECT_URI,
    RESPONSE_TYPE
} from "../page/constants/oidc.ts";

export const sendRedirect = () => {
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
            console.log(url.toString());
            window.location.href = url.toString();
        })
}