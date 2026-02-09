import { call, put, takeLatest } from "redux-saga/effects";
import { GETACCESSTOKEN } from "../api/sabreApi";
import { ApiResponse, SagaGenerator } from "../../types/common";
import { showToast } from "../../util/Toast";
import { SabreAuthRequestFailure, SabreAuthRequestSuccess } from "../reducers/SabreAuthReducer";


// logoutSaga generator function
export function* sabreAccesstokenSaga({ payload, type }: { payload: {  }, type: string }): SagaGenerator<{ data: ApiResponse<any> }> {
    try {
        const resp = yield call(GETACCESSTOKEN);
        const result: ApiResponse<any> = resp?.data;
        // if (result?.success) {
    
            console.log("sabreToken",result)
            if(result.access_token){
                localStorage.setItem("sabreAccessToken",result.access_token)
                yield put(SabreAuthRequestSuccess(result.access_token))
            }
            showToast({ message: 'token updated successfully.', type: 'success', durationTime: 3500, position: "top-center" });
            // yield put(AuthLogoutSuccess(result));
        // };
    } catch (error: any) {
        yield put(SabreAuthRequestFailure(error?.response?.data?.message));
        // showToast({ message: error?.response?.data?.message || 'token update failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

export default function* watchSabreAuth() {
    yield takeLatest('sabreAuthSlice/SabreAuthRequest', sabreAccesstokenSaga);
};