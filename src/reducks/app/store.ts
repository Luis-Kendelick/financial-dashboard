// REDUCKS pattern - quack quack

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { carsSlice } from "../features/cars/carsSlice";
import { carsApi } from "reducks/features/cars/carsApi";

const rootReducer = combineReducers({
  carsSlice: carsSlice.reducer,
});

const store = configureStore({
  reducer: {
    reducer: rootReducer,
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
