import {configureStore} from "@reduxjs/toolkit";
import {sliceReducer} from "./slice/authentication.ts";

export const store = configureStore({
    reducer: {
        authentication: sliceReducer
    }
})

export type AppState = typeof store.getState;

export type AppStore = ReturnType<AppState>;

export type AppDispatch = typeof store.dispatch;

