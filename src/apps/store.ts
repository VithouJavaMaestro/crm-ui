import {configureStore} from "@reduxjs/toolkit";
import {actionReducer} from "./slice/action.ts";
import {fetchReducer} from "./fetchSlice.ts";
import {authApi} from "../api/authApi.ts";
import {noteApi} from "../api/noteApi.ts";

export const store = configureStore({
    reducer: {
        action: actionReducer,
        fetch: fetchReducer,
        [noteApi.reducerPath]: noteApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware).concat(noteApi.middleware),
})

export type AppState = typeof store.getState;

export type AppStore = ReturnType<AppState>;

export type AppDispatch = typeof store.dispatch;

