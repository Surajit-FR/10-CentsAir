import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN } from "../api/api";
import { authFailure, authSuccess } from "../reducers/authReducers";
import { SagaGenerator } from "../../types/common";

export function* authSaga({ payload, type }: { payload: any, type: string }): SagaGenerator<{ data: any }> {
    try {
        const resp = yield call(LOGIN, payload?.data);
        const result: Array<any> = resp?.data;
        // if (result?.success) {
        payload.navigate("/");
        yield put(authSuccess(result));
        // };
    } catch (error: any) {
        yield put(authFailure(error.message));
    };
};

export default function* watchAuth() {
    yield takeLatest('authSlice/authRequest', authSaga);
};