import {configureStore} from "@reduxjs/toolkit";
import {sliceReducer} from "./slice/authentication.ts";
export const root = configureStore({
    reducer: {
        authentication: sliceReducer
    }
})

export type AppState = typeof root.getState;

export type AppStore = ReturnType<AppState>;

export type AppDispatch = typeof root.dispatch;

