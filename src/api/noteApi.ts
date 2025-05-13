import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {config} from "../env.ts";
import {NoteRepresentation} from "./aNoteApi.ts";

export const noteApi = createApi({
    reducerPath: "noteApi",
    baseQuery: fetchBaseQuery({
        baseUrl: config.VITE_NOTE_SERVER_URI
    }),
    endpoints: (builder) => ({
        createNoteApi: builder.mutation<void, NoteRepresentation>({
            query: (note) => ({
                url: `api/notes`,
                method: 'POST',
                body: note
            })
        })
    })
});

export const {
    useCreateNoteApi
} = noteApi;