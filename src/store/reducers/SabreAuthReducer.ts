import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    sabreAuthData: {},
    error: null,
    type: ''
};

const SabreAuthSlice = createSlice({
    name: "sabreAuthSlice",
    initialState,
    reducers: {
        // Sabre Access Token
        SabreAuthRequest: (state, { payload, type }) => {
            state.type = type;
        },
        SabreAuthRequestSuccess: (state, { payload, type }) => {
            state.type = type;
            state.sabreAuthData= payload
        },
        SabreAuthRequestFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

    }
});

export const {
    SabreAuthRequest,
    SabreAuthRequestSuccess,
    SabreAuthRequestFailure,
} = SabreAuthSlice.actions;

export default SabreAuthSlice.reducer;