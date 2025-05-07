import {configureStore} from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice.ts";

export const store = configureStore({
    reducer: {
        token: tokenSlice
    }
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type Dispatch = typeof store.dispatch;

