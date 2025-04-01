import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducers/AuthReducers";
import SabreSearchReducer from './reducers/SabreSearchReducers'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import InstaFlightSearch  from "./reducers/InstaFlightSearchReducer";
import SabreAuthSlice from './reducers/SabreAuthReducer'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
    reducer: {
        authSlice: AuthSlice,
        sabreGeolocationSlice: SabreSearchReducer,
        instaFlightSearchSlice : InstaFlightSearch,
        sabreAuthSlice: SabreAuthSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;