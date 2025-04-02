import { all } from "redux-saga/effects";
import watchAuth from "./sagas/authSaga";
import watchSabreSearch from "./sagas/sabreSearchSaga";
import watchInstaFlightSearch from "./sagas/instaFlightSearchSaga";
import watchSabreAuth from "./sagas/sabreAuthSaga";
import watchSabreSeatMap from "./sagas/getSeatMapDetailsSaga";


export default function* rootSaga() {
    yield all([
        watchAuth(),
        watchSabreSearch(),
        watchInstaFlightSearch(),
        watchSabreAuth(),
        watchSabreSeatMap(),
    ])
}