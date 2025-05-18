import {configureStore} from "@reduxjs/toolkit";
import {actionReducer} from "./slice/action.ts";
import {fetchReducer} from "./fetchSlice.ts";
import {noteApi} from "../api/noteApi.ts";
import {oauth2ServerApi} from "../api/oauth2ServerApi.ts";

export const store = configureStore({
    reducer: {
        action: actionReducer,
        fetch: fetchReducer,
        [noteApi.reducerPath]: noteApi.reducer,
        [oauth2ServerApi.reducerPath]: oauth2ServerApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(noteApi.middleware).concat(oauth2ServerApi.middleware),
})

export type AppState = typeof store.getState;

export type AppStore = ReturnType<AppState>;

export type AppDispatch = typeof store.dispatch;

