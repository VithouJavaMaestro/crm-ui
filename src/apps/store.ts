import {configureStore} from "@reduxjs/toolkit";
import {actionReducer} from "./slice/action.ts";
import {fetchReducer} from "./fetchSlice.ts";

export const store = configureStore({
    reducer: {
        action: actionReducer,
        fetch: fetchReducer
    }
})

export type AppState = typeof store.getState;

export type AppStore = ReturnType<AppState>;

export type AppDispatch = typeof store.dispatch;

