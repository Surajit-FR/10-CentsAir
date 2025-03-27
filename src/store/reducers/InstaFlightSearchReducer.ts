import { createSlice } from "@reduxjs/toolkit";
import { InstaSearchState } from "../../types/sabreReturnTypes";



const initialState: InstaSearchState = {
    data:[],
    type:'',
    error: null
}
const InstaFlightSearchSlice = createSlice({
    name: "instaFlightSearchSlice",
    initialState,
    reducers: {
  
        InstaFlightSearch: (state, { payload, type }) => {
            state.type = type;
        },
        InstaFlightSearchSuccess: (state, { payload, type }) => {
            state.type = type;
            state.data = payload
        },
        InstaFlightSearchFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

    }
});
export const {
    InstaFlightSearch,
    InstaFlightSearchSuccess,
    InstaFlightSearchFailure,
} = InstaFlightSearchSlice.actions;

export default InstaFlightSearchSlice.reducer;