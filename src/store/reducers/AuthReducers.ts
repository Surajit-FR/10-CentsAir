import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../types/common";

const initialState: DataState = {
    authData: {},
    error: null,
    type: '',
    singleUserData:{},
};

const AuthSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        // Social
        AuthSocialRequest: (state, { payload, type }) => {
            state.type = type;
        },
        AuthSocialSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        AuthSocialFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Signup
        AuthSignupRequest: (state, { payload, type }) => {
            state.type = type;
        },
        AuthSignupSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        AuthSignupFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Login
        AuthLoginRequest: (state, { payload, type }) => {
            state.type = type;
        },
        AuthLoginSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        AuthLoginFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Logout
        AuthLogoutRequest: (state, { payload, type }) => {
            state.type = type;
        },
        AuthLogoutSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        AuthLogoutFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
          // Get Single User
          GetSingleUserRequest: (state, { payload, type }) => {
            state.type = type;
        },
        GetSingleUserSuccess: (state, { payload, type }) => {
            state.type = type;
            state.singleUserData = payload?.data;
        },
        GetSingleUserFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
    }
});

export const {
    AuthSocialRequest,
    AuthSocialSuccess,
    AuthSocialFailure,

    AuthSignupRequest,
    AuthSignupSuccess,
    AuthSignupFailure,

    AuthLoginRequest,
    AuthLoginSuccess,
    AuthLoginFailure,

    AuthLogoutRequest,
    AuthLogoutSuccess,
    AuthLogoutFailure,

    GetSingleUserRequest,
    GetSingleUserSuccess,
    GetSingleUserFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;