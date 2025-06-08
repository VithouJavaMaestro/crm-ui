import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {config} from "../env.ts";

export interface User {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    profile: string
}

export const userApi = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.VITE_GATEWAY_URI}/crm-profile`,
        credentials: "include"
    }),
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        getUsers: builder.query<Array<User>, string>({
            query: (filter) => ({
                url: "/users",
                params: {
                    "filter": filter
                }
            })
        })
    })
})

export const {useLazyGetUsersQuery} = userApi;