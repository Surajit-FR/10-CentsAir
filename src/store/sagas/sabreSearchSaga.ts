import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, SagaGenerator } from "../../types/common";
import { showToast } from "../../util/Toast";
import { SEARCHLOCATIONS } from "../api/sabreApi";
import { SabreSerchGeoLocation, SabreSerchGeoLocationSuccess } from "../reducers/SabreSearchReducers";


// searchLocation generator function
export function* SabreSearchGeoLocationSaga({ payload, type }: { payload: { query: string }, type: string }): SagaGenerator<any> {
    try {
        const resp = yield call(SEARCHLOCATIONS, payload.query);
        console.log("triggered")
        const result: any = resp?.data;
        console.log({result: result?.grouped?.["category:AIR"]})
        // if (result?.grouped?.["category:AIR"].doclist.docs && result?.grouped?.["category:AIR"].doclist.docs.length > 0) {
        //     showToast({ message: result?.message || 'Logout Successfully.', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(SabreSerchGeoLocationSuccess(result?.grouped?.["category:AIR"]));
        // };
    } catch (error: any) {
        yield put(SabreSerchGeoLocation(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message || 'Logout failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

export default function* watchSabreSearch() {
    yield takeLatest('sabreSlice/SabreSerchGeoLocation', SabreSearchGeoLocationSaga);
    
};