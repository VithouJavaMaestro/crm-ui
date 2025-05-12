import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Action {
    expandedSidebar: boolean
}

const initialState: Action = {expandedSidebar: true}

export const slice = createSlice({
    name: "action",
    reducers: {
        expandSidebar: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                expandedSidebar: action.payload
            }
        }
    },
    initialState: initialState
})

export const {expandSidebar} = slice.actions;

export const actionReducer = slice.reducer;