import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../reducers/authReducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: {
        authSlice: AuthSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
});

sagaMiddleware.run(rootSaga);

export default store;
