// REDUCKS pattern - quack quack

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICarInfos } from "models/ICar";
import axios from "axios";
import { cars } from "components/CarAvaliationCard/Cars";

interface ICarsState {
  loading: boolean;
  error: string | undefined;
  cars: ICarInfos[];
}

const initialState: ICarsState = {
  loading: true,
  error: undefined,
  cars: [
    {
      ad_selling_price: 0,
      brand_name: "",
      fuel_type: "",
      image: "",
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
    },
  ],
};

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  return axios
    .get("http://www.mocky.io/v2/5eb553df31000060006994a8")
    .then((response) => response.data);
});

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    getCarsList: (state) => {
      state.cars;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchCars.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, action: PayloadAction<ICarInfos[]>) => {
      state.loading = false;
      state.cars = action.payload;
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.cars = [];
    });
  },
});

export const { getCarsList } =
  carsSlice.actions;

export default carsSlice.reducer;
