import { call, put, takeLatest } from "redux-saga/effects";
import { SagaGenerator } from "../../types/common";
import { showToast } from "../../util/Toast";
import { INSTAFLIGHTSEARCHRESULTS } from "../api/sabreApi";
import { InstaFlightSearchParamstypes } from "../../types/sabreReturnTypes";
import { InstaFlightSearchFailure, InstaFlightSearchSuccess } from "../reducers/InstaFlightSearchReducer";


// searchLocation generator function
export function* InstaFlightSearchSaga({ payload, type }: { payload: { query: InstaFlightSearchParamstypes }, type: string }): SagaGenerator<any> {
    try {
        const resp = yield call(INSTAFLIGHTSEARCHRESULTS, payload.query);
        const result: any = resp?.data;
        // if (result?.grouped?.["category:AIR"].doclist.docs && result?.grouped?.["category:AIR"].doclist.docs.length > 0) {
        //     showToast({ message: result?.message || 'Logout Successfully.', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(InstaFlightSearchSuccess(result));
        // };
    } catch (error: any) {
        yield put(InstaFlightSearchFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message || 'Logout failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

export default function* watchInstaFlightSearch() {
    yield takeLatest('instaFlightSearchSlice/InstaFlightSearch', InstaFlightSearchSaga);
    
};