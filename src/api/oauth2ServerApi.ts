import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {config} from "../env.ts";


export interface UserPrinciple {
    sub: string
}

export const oauth2ServerApi = createApi({
    reducerPath: 'authServerApi',
    tagTypes: ['AuthServer'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.VITE_GATEWAY_URI}/auth-server`,
        credentials: "include"
    }),
    refetchOnMountOrArgChange: true,
    endpoints: (build) => ({
        getUserInfo: build.query<UserPrinciple, void>({
            query: () => ({
                url: "/userinfo",
            })
        })
    })
})


export const {useLazyGetUserInfoQuery} = oauth2ServerApi;