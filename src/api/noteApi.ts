import {config} from "../env.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {NoteRepresentation} from "../model/note.ts";
import {with401BaseQuery} from "./gatewayApi.ts";
import Cookies from "js-cookie";

export const noteApi = createApi({
    reducerPath: 'noteApi',
    tagTypes: ['Note'],
    baseQuery: with401BaseQuery(fetchBaseQuery({
        baseUrl: `${config.VITE_GATEWAY_URI}/crm-note`,
        credentials: "include",
        headers: {
            'X-XSRF-TOKEN': Cookies.get("XSRF-TOKEN") ?? ''
        }
    })),
    refetchOnMountOrArgChange: true,
    keepUnusedDataFor: 0,
    endpoints: (builder) => ({
        getNotes: builder.query<Array<NoteRepresentation>, void>({
            query: () => ({
                url: "/api/v1/notes",
                method: "GET",
            }),
            providesTags: [{type: 'Note', id: 'LIST'}]
        }),
        createNote: builder.mutation<void, NoteRepresentation>({
            query: (body) => ({
                url: `api/v1/notes`,
                method: 'POST',
                body
            }),
            invalidatesTags: [{type: 'Note', id: 'LIST'}]
        }),
        getNote: builder.query<NoteRepresentation, string>({
            query: (id: string) => ({
                url: `/api/v1/notes/${id}`,
            }),
            providesTags: [{type: 'Note', id: 'FETCH'}]
        }),
        updateNote: builder.mutation<void, NoteRepresentation>({
            query: (note) => ({
                url: "/api/v1/notes",
                method: "PUT",
                body: note,
            }),
            invalidatesTags: [{type: "Note", id: "LIST"}, {type: 'Note', id: 'FETCH'}]
        }),
        deleteNote: builder.mutation<void, string>({
            query: (id: string) => ({
                url: `/api/v1/notes/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: "Note", id: "LIST"}]
        })
    })
});

export const {
    useCreateNoteMutation,
    useGetNotesQuery,
    useGetNoteQuery,
    useUpdateNoteMutation,
    useDeleteNoteMutation
} = noteApi;