import { all } from "redux-saga/effects";
import watchAuth from "./sagas/authSaga";
import watchSabreSearch from "./sagas/sabreSearchSaga";


export default function* rootSaga() {
    yield all([
        watchAuth(),
        watchSabreSearch()
    ])
}