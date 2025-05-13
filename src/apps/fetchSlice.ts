import {createSlice} from "@reduxjs/toolkit";

interface FetchState {
    fetchNote: boolean
}

const initialState: FetchState = {
    fetchNote: false
}

const fetchSlice = createSlice({
    name: "fetch",
    initialState,
    reducers: {
        doFetchNode: (state) => {
            return {
                ...state,
                fetchNote: true
            }
        }
    }
});


export const {doFetchNode} = fetchSlice.actions;

export const fetchReducer = fetchSlice.reducer;