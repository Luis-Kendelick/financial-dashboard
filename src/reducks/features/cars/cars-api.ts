import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../app/baseQuery";

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getCarsDetails: builder.query<any, any>({
      query: () => ({
        method: "GET"
      }),
    }),
  }),
});

export const {
  useGetCarsDetailsQuery,
} = carsApi;
