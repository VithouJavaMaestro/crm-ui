import axios from "axios";
import {config} from "../env.ts";
import {isTokenExpired} from "../utils/jwt.ts";
import {getToken, setToken} from "../worker/tokenWorker.ts";
import {jwtDecode} from "jwt-decode";
import {renewOAuth2AccessToken} from "./authApi.ts";
import {sendRedirect} from "../utils/redirect.ts";

const ANoteApi = axios.create(({
    baseURL: config.VITE_NOTE_SERVER_URI + "/api"
}));


ANoteApi.interceptors.request.use(async config => {
    let value = await getToken();
    const expirationTime = jwtDecode(value.accessToken).exp;
    if (isTokenExpired(expirationTime)) {
        value = await renewOAuth2AccessToken({
            refreshToken: value.refreshToken,
            clientId: "crm"
        }).catch(() => {
            sendRedirect();
        });
        setToken({
            refreshToken: value.refreshToken,
            accessToken: value.accessToken,
            expiresIn: value.expiresIn
        })
    }
    config.headers.setAuthorization(`Bearer ${value.accessToken}`);
    return config;
});

export interface NoteRepresentation {
    title?: string,
    description?: string,
    createdAt?: string
}

export const createNoteApi = async (note: NoteRepresentation) => {
    return await ANoteApi.post("/notes", note);
}


export const getNotesApi = async () => {
    return await ANoteApi.get("/notes");
}