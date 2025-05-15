import {config} from "../env.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getToken, setToken} from "../worker/tokenWorker.ts";
import {NoteRepresentation} from "../model/note.ts";
import {authBaseQuery} from "./authApi.ts";
import {Object} from "../utils/shared.ts";
import {jwtDecode} from "jwt-decode";
import {isTokenExpired} from "../utils/jwt.ts";

const noteBaseQuery = fetchBaseQuery({
    baseUrl: config.VITE_NOTE_SERVER_URI,
    prepareHeaders: async (headers) => {
        const oauth2Token = await getToken();
        headers.set("Authorization", "Bearer " + oauth2Token.accessToken);
    },
})

export const baseQueryWithReAuth = async (args: Object, store: Object, extraOptions: Object) => {
    const oauth2Token = await getToken();
    let accessToken = oauth2Token.accessToken;
    if (isTokenExpired(jwtDecode(accessToken))) {
        const form = new URLSearchParams({
            client_id: "crm",
            grant_type: "refresh_token",
            refresh_token: oauth2Token.refreshToken
        }).toString();
        const renewOAuth2Token = await authBaseQuery({
            url: '/oauth2/token',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: form,
        }, store, extraOptions);
        const {access_token, refresh_token, expires_in} = renewOAuth2Token.data as Object;

        if (access_token && refresh_token && expires_in) {
            setToken({
                accessToken: access_token,
                refreshToken: refresh_token,
                expiresIn: expires_in
            });

            return noteBaseQuery(args, store, extraOptions);
        }
    }
    return noteBaseQuery(args, store, extraOptions);
};

export const noteApi = createApi({
    reducerPath: 'noteApi',
    tagTypes: ['Note'],
    baseQuery: baseQueryWithReAuth,
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        getNotes: builder.query<Array<NoteRepresentation>, void>({
            query: () => ({
                url: "/api/notes",
                method: "GET",
            }),
            providesTags: [{type: 'Note', id: 'LIST'}]
        }),
        createNote: builder.mutation<void, NoteRepresentation>({
            query: (body) => ({
                url: `api/notes`,
                method: 'POST',
                body
            }),
            invalidatesTags: [{type: 'Note', id: 'LIST'}]
        }),
        getNote: builder.query<NoteRepresentation, number>({
            query: (id: number) => ({
                url: `/api/notes/${id}`,
            }),
        }),
        updateNote: builder.mutation<void, NoteRepresentation>({
            query: (note) => ({
                url: "/api/notes",
                method: "PUT",
                body: note,
            }),
            invalidatesTags: [{type: "Note", id: "LIST"}]
        })
    })
});

export const {
    useCreateNoteMutation,
    useGetNotesQuery,
    useGetNoteQuery,
    useUpdateNoteMutation
} = noteApi;