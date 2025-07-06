import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {with401BaseQuery} from "./gatewayApi.ts";
import {config} from "../env.ts";

export interface BelongTo {
    firstname: string;
    lastname: string;
    email: string;
    profile: string;
    phone: string;
}

export interface Invitation {
    id: number
}

export const chatApi = createApi({
    reducerPath: "chatApi",
    baseQuery: with401BaseQuery(fetchBaseQuery({
        baseUrl: `${config.VITE_GATEWAY_URI}/crm-chat`,
        credentials: "include"
    })),
    refetchOnMountOrArgChange: true,
    endpoints: (build) => ({
        getBelongTo: build.query<Array<BelongTo>, string>({
            query: (filter) => ({
                url: `/invitation/users/belong?filter=${filter}`,
            }),
            providesTags: [{type: "Chat", id: "List"}]
        }),
        inviteUser: build.mutation<void, Invitation>({
            query: (invitation) => ({
                url: `/invitation`,
                body: invitation,
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
            }),
            invalidatesTags: [{type: "Chat", id: "List"}]
        })
    })
});

export const {useGetBelongToQuery, useInviteUserMutation} = chatApi;