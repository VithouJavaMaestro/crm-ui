import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface OAuth2Token {
    accessToken: string,
    refreshToken: string,
    expiresIn: number
}

export interface UserPrinciple {
    authenticated: boolean,
}

const initialAccessToken: OAuth2Token = {
    accessToken: '',
    refreshToken: '',
    expiresIn: 0,
}

const initialUserPrinciple: UserPrinciple = {
    authenticated: false
}

export const slice = createSlice({
    name: "oauth2Token",
    initialState: {...initialAccessToken, ...initialUserPrinciple},
    reducers: {
        setOAuth2Token: (state, action: PayloadAction<OAuth2Token>) => {
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                expiresIn: action.payload.expiresIn
            }
        },
        setUserPrincipal: (state, action: PayloadAction<UserPrinciple>) => {
            return {
                ...state,
                authenticated: action.payload.authenticated
            }
        }
    }
});

export const {setOAuth2Token, setUserPrincipal} = slice.actions;

export const sliceReducer = slice.reducer;