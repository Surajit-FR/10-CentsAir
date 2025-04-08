import { call, put, takeLatest } from "redux-saga/effects";
import { SagaGenerator } from "../../types/common";
import { showToast } from "../../util/Toast";
import { INSTAFLIGHTSEARCHRESULTS, INSTAFLIGHTSEARCHRESULTSBYTAG } from "../api/sabreApi";
import { InstaFlightSearchParamstypes } from "../../types/sabreReturnTypes";
import { InstaFlightSearchByTagFailure, InstaFlightSearchByTagSuccess, InstaFlightSearchFailure, InstaFlightSearchSuccess } from "../reducers/InstaFlightSearchReducer";
import { NavigateFunction } from "react-router-dom";


// searchLocation generator function
export function* InstaFlightSearchSaga({ payload, type }: { payload: { query: InstaFlightSearchParamstypes }, type: string }): SagaGenerator<any> {
    try {
        const resp = yield call(INSTAFLIGHTSEARCHRESULTS, payload.query);
        const result: any = resp?.data;
        // if (result?.grouped?.["category:AIR"].doclist.docs && result?.grouped?.["category:AIR"].doclist.docs.length > 0) {
        //     showToast({ message: result?.message || 'Logout Successfully.', type: 'success', durationTime: 3500, position: "top-center" });
        if(result.DepartureDateTime){
            yield put(InstaFlightSearchSuccess(result));
        }
        // };
    } catch (error: any) {
        yield put(InstaFlightSearchFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message || 'Logout failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};
export function* InstaFlightSearchByTagSaga({ payload, type }: { payload: { tagId: string, navigate?: NavigateFunction }, type: string }): SagaGenerator<any> {
    try {
        const resp = yield call(INSTAFLIGHTSEARCHRESULTSBYTAG, payload.tagId);
        const result: any = resp?.data;
        // if (result?.grouped?.["category:AIR"].doclist.docs && result?.grouped?.["category:AIR"].doclist.docs.length > 0) {
        //     showToast({ message: result?.message || 'Logout Successfully.', type: 'success', durationTime: 3500, position: "top-center" });
        console.log({result})
        if(result.SequenceNumber){
            yield put(InstaFlightSearchByTagSuccess(result));
            showToast({ message: result?.message || 'Flight data received successfully', type: 'success', durationTime: 3500, position: "top-center" });
            // payload.navigate && payload.navigate('/booked-flight-details')
        }
        // };
    } catch (error: any) {
        yield put(InstaFlightSearchByTagFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message || 'Failed to retrieve flight data ', type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

export default function* watchInstaFlightSearch() {
    yield takeLatest('instaFlightSearchSlice/InstaFlightSearch', InstaFlightSearchSaga);
    yield takeLatest('instaFlightSearchSlice/InstaFlightSearchByTag', InstaFlightSearchByTagSaga);
    
};