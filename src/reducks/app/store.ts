// REDUCKS pattern - quack quack

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { carsSlice } from "../features/cars/cars";
import { carsApi } from "../features/cars/cars-api";

const rootReducer = combineReducers({
  carsSlice: carsSlice.reducer,
});

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(carsApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
