import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface OAuth2Token {
    accessToken: string,
    refreshToken: string,
}

const initialState: OAuth2Token = {
    accessToken: '',
    refreshToken: ''
}

const tokenSlice = createSlice({
    name: 'oauth2Token',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<OAuth2Token>) => {
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
            }
        }
    }
})

export const {setToken} = tokenSlice.actions;

export default tokenSlice.reducer;