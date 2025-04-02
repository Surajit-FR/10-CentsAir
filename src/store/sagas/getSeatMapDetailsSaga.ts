import { call, put, takeLatest } from "redux-saga/effects";
import { GETSEATMAPDETAILS } from "../api/sabreApi";
import { ApiResponse, SagaGenerator } from "../../types/common";
import { showToast } from "../../util/Toast";
import { GetFlightSeatMaprequestFailure } from "../reducers/SeatMapReducers";



// flight seat map generator function
export function* getSeatMapDetailsSaga({ payload, type }: { payload: { data: any  }, type: string }): SagaGenerator<{ data: ApiResponse<any> }> {
    try {
        const resp = yield call(GETSEATMAPDETAILS, payload?.data);
        const result: ApiResponse<any> = resp?.data;
        // if (result?.success) {
    
            console.log("sabre flight seat map",result)
            // if(result.access_token){
            //     localStorage.setItem("sabreAccessToken",result.access_token)
            //     yield put(SabreAuthRequestSuccess(result.access_token))
            // }
            // showToast({ message: 'token updated successfully.', type: 'success', durationTime: 3500, position: "top-center" });
            // yield put(AuthLogoutSuccess(result));
        // };
    } catch (error: any) {
        yield put(GetFlightSeatMaprequestFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message || 'token update failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

export default function* watchSabreSeatMap() {
    yield takeLatest('sabreSeatMapSlice/GetFlightSeatMaprequest', getSeatMapDetailsSaga);
};