import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import {config} from "../env.ts";
import {sendRedirect} from "../utils/redirect.ts";

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
});

export const with401BaseQuery = (
    baseQuery: ReturnType<typeof fetchBaseQuery>
): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> => {
    return async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions);

        if (result.error && result.error.status === 401) {
            sendRedirect();
            throw result.error;
        }

        return result;
    };
};

export const {useLogoutMutation} = gatewayApi;