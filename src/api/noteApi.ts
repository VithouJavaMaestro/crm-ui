import {config} from "../env.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {NoteRepresentation} from "../model/note.ts";

export const noteApi = createApi({
    reducerPath: 'noteApi',
    tagTypes: ['Note'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.VITE_GATEWAY_URI}/crm-note`,
        credentials: "include"
    }),
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
        }),
        deleteNote: builder.mutation<void, number>({
            query: (id) => ({
                url: `/api/notes/${id}`,
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