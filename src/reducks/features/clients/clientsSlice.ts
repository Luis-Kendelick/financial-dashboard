import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IClientListItemProps } from "models/IClient";

export interface IClientsPagination {
  page: number;
  per_page: number;
  total_pages: number;
  total_clients: number;
  current_page: number;
  client_list: IClientListItemProps[];
  clients_to_erase: number[];
}

const initialState: IClientsPagination = {
  page: 0,
  per_page: 10,
  total_clients: 0,
  total_pages: 0,
  current_page: 1,
  client_list: [],
  clients_to_erase: [],
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
  },
});

export const {
} = clientsSlice.actions;

export default clientsSlice.reducer;
