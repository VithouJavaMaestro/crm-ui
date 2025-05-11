import axios from "axios";
import {config} from "../env.ts";
import {store} from "../apps/store.ts";

const noteApi = axios.create(({
    baseURL: config.VITE_NOTE_SERVER_URI + "/api"
}));

noteApi.interceptors.request.use(config => {
    const authentication = store.getState().authentication;
    config.headers.setAuthorization(`Bearer ${authentication.accessToken}`);
    return config;
});

interface NoteCreation {
    title: string,
    description: string
}

export const createNoteApi = async (note: NoteCreation) => {
    return await noteApi.post("/notes", note);
}
