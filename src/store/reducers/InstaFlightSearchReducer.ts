import { createSlice } from "@reduxjs/toolkit";
import { InstaSearchState } from "../../types/sabreReturnTypes";


const initPTC = {

    FareBasisCodes: { FareBasisCode: [] },
    PassengerTypeQuantity: {
        Quantity: 0,
        Code: ""
    },
    PassengerFare: {
        FareConstruction: {
            CurrencyCode: '',
            DecimalPlaces: 2,
            Amount: 0
        },
        TotalFare: {
            CurrencyCode: '',
            Amount: 0
        },
        Taxes: {
            TotalTax: {
                CurrencyCode: '',
                DecimalPlaces: 2,
                Amount: 0
            },
            Tax: []
        },
        BaseFare: {
            CurrencyCode: '',
            Amount: 0
        },
        EquivFare: {
            CurrencyCode: '',
            DecimalPlaces: 2,
            Amount: 0
        },
        Endorsements: {
            NonRefundableIndicator: false
        }


    },
    Endorsements: {
        NonRefundableIndicator: false
    }
}

const initAirIten = {
    LastTicketDate: "",
    PTC_FareBreakdowns: {
        PTC_FareBreakdown: initPTC
    },
    FareInfos: {
        FareInfo: [],
    },
    TPA_Extensions: {
        DivideInParty: {
            Indicator: false
        }
    },
    ItinTotalFare: {
        FareConstruction: {
            CurrencyCode: '',
            DecimalPlaces: 2,
            Amount: 0
        },
        TotalFare: {
            CurrencyCode: '',
            DecimalPlaces: 2,
            Amount: 0
        },
        Taxes: {
            Tax: []
        },
        BaseFare: {
            CurrencyCode: '',
            DecimalPlaces: 2,
            Amount: 0
        },
        EquivFare: {
            CurrencyCode: '',
            DecimalPlaces: 2,
            Amount: 0
        },
    }
}

const initialState: InstaSearchState = {
    data: {
        PricedItineraries: [],
        DepartureDateTime: new Date(),
        DestinationLocation: '',
        OriginLocation: '',
        Page:{
            Offset: 0,
            Size: 0,
            TotalTags: 0,
        }
    },
    singleSearchData: {
        AirItinerary: { DirectionInd: '', OriginDestinationOptions: { OriginDestinationOption: [] } },
        TPA_Extensions: { TagID: '', ValidatingCarrier: { Code: '' } },
        SequenceNumber: 0,
        AirItineraryPricingInfo: initAirIten,
        TicketingInfo: {
            ValidInterline: "No",
            TicketType: ''
        },

    },
    type: '',
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
            state.data=initialState.data
        },
        InstaFlightSearchByTag: (state, { payload, type }) => {
            state.type = type;
        },
        InstaFlightSearchByTagSuccess: (state, { payload, type }) => {
            state.type = type;
            state.singleSearchData = payload
        },
        InstaFlightSearchByTagFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
            state.singleSearchData=initialState.singleSearchData;
        },

    }
});
export const {
    InstaFlightSearch,
    InstaFlightSearchSuccess,
    InstaFlightSearchFailure,
    InstaFlightSearchByTag,
    InstaFlightSearchByTagSuccess,
    InstaFlightSearchByTagFailure
} = InstaFlightSearchSlice.actions;

export default InstaFlightSearchSlice.reducer;