import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../types/common";

const initialState: DataState = {
    data: [],
    loading: false,
    error: null,
    type: ''
};

const AuthSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        authRequest: (state, { payload, type }) => {
            state.loading = true;
            state.type = type;
        },
        authSuccess: (state, { payload, type }) => {
            state.loading = false;
            state.type = type;
            state.data = payload.data;
        },
        authFailure: (state, { payload, type }) => {
            state.loading = false;
            state.type = type;
            state.error = payload;
        },
    }
});

export const {
    authRequest,
    authSuccess,
    authFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;