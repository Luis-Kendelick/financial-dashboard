import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICarInfos } from 'models/ICar'

export const carsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.mocky.io/v2/5eb553df31000060006994a8' }),
  reducerPath: 'carsApi',
  endpoints: (build) => ({
    fetchCars: build.query<ICarInfos[], string>({
      query: () => {
        return '/'
      }
    }),
  }),
})

export const { useFetchCarsQuery } = carsApi