import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, SagaGenerator } from "../../types/common";
import {
    AuthLoginSuccess,
    AuthLoginFailure,
    AuthLogoutSuccess,
    AuthLogoutFailure,
    AuthSignupSuccess,
    AuthSignupFailure,
    AuthSocialSuccess,
    AuthSocialFailure,
    GetSingleUserSuccess,
    GetSingleUserFailure
} from "../reducers/AuthReducers";
import {
    GETSINGLEUSERDETAILS,
    LOGIN,
    LOGOUT,
    SIGNUP,
    SOCIALLOGIN
} from "../api/api";
import {
    GetSingleUserResponse,
    LoginFormValues,
    SignUpFormValues,
    TSocialLoginValues,
    UserData
} from "../../types/authTypes";
import { NavigateFunction } from "react-router-dom";
import { showToast } from "../../util/Toast";


// socialAuthSaga generator function
export function* socialAuthSaga({ payload, type }: { payload: { data: TSocialLoginValues, navigate: NavigateFunction }, type: string }): SagaGenerator<{ data: ApiResponse<UserData> }> {
    try {
        const resp = yield call(SOCIALLOGIN, payload?.data);
        const result: ApiResponse<UserData> = resp?.data;
        if (result?.success) {
            payload.navigate("/");
            window.localStorage.setItem("accessToken", result?.data?.accessToken as string);
            window.localStorage.setItem("refreshToken", result?.data?.refreshToken as string);
            showToast({ message: result?.message || 'Login Successfully.', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(AuthSocialSuccess(result));
        };
    } catch (error: any) {
        yield put(AuthSocialFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message || 'Login failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

// registerSaga generator function
export function* registerSaga({ payload, type }: { payload: { data: SignUpFormValues, navigate: NavigateFunction }, type: string }): SagaGenerator<{ data: ApiResponse<UserData> }> {
    try {
        const resp = yield call(SIGNUP, payload?.data);
        const result: ApiResponse<UserData> = resp?.data;
        if (result?.success) {
            payload.navigate("/login");
            showToast({ message: result?.message || 'Registered Successfully.', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(AuthSignupSuccess(result));
        };
    } catch (error: any) {
        yield put(AuthSignupFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message || 'Registered failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

// loginSaga generator function
export function* loginSaga({ payload, type }: { payload: { data: LoginFormValues, navigate: NavigateFunction }, type: string }): SagaGenerator<{ data: ApiResponse<UserData> }> {
    try {
        const resp = yield call(LOGIN, payload?.data);
        const result: ApiResponse<UserData> = resp?.data;
        if (result?.success) {
            payload.navigate("/");
            // window.localStorage.setItem("accessToken", result?.data?.accessToken as string);
            // window.localStorage.setItem("refreshToken", result?.data?.refreshToken as string);
            window.localStorage.setItem("_id", result?.data?._id as string);
            showToast({ message: result?.message || 'Login Successfully.', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(AuthLoginSuccess(result));
        };
    } catch (error: any) {
        yield put(AuthLoginFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message || 'Login failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

// logoutSaga generator function
export function* logoutSaga({ payload, type }: { payload: { navigate: NavigateFunction }, type: string }): SagaGenerator<{ data: ApiResponse<UserData> }> {
    try {
        // const resp = yield call(LOGOUT);
        // const result: ApiResponse<UserData> = resp?.data;
        // if (result?.success) {
            payload.navigate("/");
            // window.localStorage.removeItem("accessToken");
            // window.localStorage.removeItem("refreshToken");
            window.localStorage.removeItem("_id");
            showToast({ message: 'Logout Successfully.', type: 'success', durationTime: 3500, position: "top-center" });
            // yield put(AuthLogoutSuccess(result));
        // };
    } catch (error: any) {
        yield put(AuthLogoutFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message || 'Logout failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};
export function* getSingleUserSaga({ payload,type }: { payload:{userId: string},type: string }): SagaGenerator<{ data: ApiResponse<GetSingleUserResponse> }> {
    try {
        console.log({payload})
        const resp = yield call(GETSINGLEUSERDETAILS, payload?.userId);

        const result: ApiResponse<GetSingleUserResponse> = resp?.data;
        if (result?.success) {
            yield put(GetSingleUserSuccess(result));
        };
    } catch (error: any) {
        yield put(GetSingleUserFailure(error?.response?.data?.message));
    };
};

export default function* watchAuth() {
    yield takeLatest('authSlice/AuthSocialRequest', socialAuthSaga);
    yield takeLatest('authSlice/AuthSignupRequest', registerSaga);
    yield takeLatest('authSlice/AuthLoginRequest', loginSaga);
    yield takeLatest('authSlice/AuthLogoutRequest', logoutSaga);
    yield takeLatest('authSlice/GetSingleUserRequest', getSingleUserSaga);
};