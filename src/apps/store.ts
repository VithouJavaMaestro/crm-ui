import {configureStore} from "@reduxjs/toolkit";
import {sliceReducer} from "./slice/authentication.ts";
import {actionReducer} from "./slice/action.ts";

export const store = configureStore({
    reducer: {
        authentication: sliceReducer,
        action: actionReducer
    }
})

export type AppState = typeof store.getState;

export type AppStore = ReturnType<AppState>;

export type AppDispatch = typeof store.dispatch;

