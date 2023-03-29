import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const axiosConfig = axios.create();

export const axiosBaseQuery =
  (): BaseQueryFn<{
    method: AxiosRequestConfig["method"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
  }> =>
  async ({
    method,
    params,
  }): Promise<QueryReturnValue<{}, AxiosError, {}>> => {
    try {
      const result = await axiosConfig({
        url: "http://www.mocky.io/v2/5eb553df31000060006994a8",
        method,
        params,
      });
      return result;
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return err as unknown as QueryReturnValue<{}, AxiosError, {}>;
    }
  };
