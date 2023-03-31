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
    changeClientsPerPage: (state, action) => {
      state.per_page = action.payload;
    },
    incrementPage: (state) => {
      if (state.current_page <= state.total_clients / state.per_page) {
        state.current_page++;
      }
    },
    decrementPage: (state) => {
      if (state.current_page > 1) {
        state.current_page--;
      }
    },
  },
});

export const {
} = clientsSlice.actions;

export default clientsSlice.reducer;
