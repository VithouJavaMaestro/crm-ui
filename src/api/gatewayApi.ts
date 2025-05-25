import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {config} from "../env.ts";

export const gatewayApi = createApi({
    reducerPath: "gateway",
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.VITE_GATEWAY_URI}`,
        credentials: "include"
    }),
    endpoints: (builder) => ({
        logout: builder.mutation<void, void>({
            query: () => ({
                url: "/logout",
                method: "POST",
                redirect: "manual"
            })
        })
    })
})

export const {useLogoutMutation} = gatewayApi;