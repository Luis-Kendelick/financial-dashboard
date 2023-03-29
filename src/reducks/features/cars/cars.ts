// REDUCKS pattern - quack quack

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { carsApi } from "./cars-api";
import { ICarInfos } from "models/ICar";

interface ICarsState {
  loading: boolean;
  error: string | null;
  cars: ICarInfos[];
}

const initialState: ICarsState = {
  loading: true,
  error: null,
  cars: [
    {
      ad_selling_price: 0,
      brand_name: "",
      fuel_type: "",
      image: '',
      brand_uuid: "",
      evaluation_type: "",
      manufacturing_year: 0,
      mileage: 0,
      model_name: "",
      model_uuid: "",
      model_year: 0,
      name: "",
      transmission_type: "",
      vehicle_uuid: "",
      version_name: "",
      version_uuid: "",
    }
  ],
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    carsDetailsRequest: (state: ICarsState) => {
      state.loading = true;
    },
    carsDetailsSuccess: (state: ICarsState, action) => {
      state.loading = false;
    },
    carsDetailsFail: (state: ICarsState, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getChannelSubscriptionStatus: (state: ICarsState, action) => {
    },
  },
});

export const {
  carsDetailsRequest,
  carsDetailsSuccess,
  carsDetailsFail,
} = carsSlice.actions;

export default carsSlice.reducer;
