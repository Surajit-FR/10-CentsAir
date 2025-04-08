import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    seatMapData: {},
    error: null,
    type: ''
};

const SabreSeatMapSlice = createSlice({
    name: "sabreSeatMapSlice",
    initialState,
    reducers: {
        // Flight Seat Map
        GetFlightSeatMaprequest: (state, { payload, type }) => {
            state.type = type;
        },
        GetFlightSeatMaprequestSuccess: (state, { payload, type }) => {
            state.type = type;
            state.sabreAuthData= payload
        },
        GetFlightSeatMaprequestFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

    }
});

export const {
    GetFlightSeatMaprequest,
    GetFlightSeatMaprequestSuccess,
    GetFlightSeatMaprequestFailure,
} = SabreSeatMapSlice.actions;

export default SabreSeatMapSlice.reducer;