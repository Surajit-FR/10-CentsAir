import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    data:{},
    type:'',
    error: null
}
const SabreSearchLocation = createSlice({
    name: "sabreSlice",
    initialState,
    reducers: {
        // Social
        SabreSerchGeoLocation: (state, { payload, type }) => {
            state.type = type;
        },
        SabreSerchGeoLocationSuccess: (state, { payload, type }) => {
            state.type = type;
            state.data = payload
        },
        SabreSerchGeoLocationFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

    }
});
export const {
    SabreSerchGeoLocation,
    SabreSerchGeoLocationSuccess,
    SabreSerchGeoLocationFailure,
} = SabreSearchLocation.actions;

export default SabreSearchLocation.reducer;