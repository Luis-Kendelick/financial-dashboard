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
    storeClientsList: (state, action) => {
      state.client_list = action.payload;
      state.total_clients = action.payload.length;
    },
    clientsToErase: (state, action: PayloadAction<number[]>) => {
      state.clients_to_erase = action.payload;
    },
    eraseClients: (state, action: PayloadAction<number[]>) => {
      const indexes = action.payload.sort((a, b) => b - a);

      const clientArray = state.client_list;

      for (let i = 0; i < indexes.length; i++) {
        clientArray.splice(indexes[i], 1);
      }

      state.client_list = clientArray;
      state.total_clients = clientArray.length;
    },
  },
});

export const {
  changeClientsPerPage,
  incrementPage,
  decrementPage,
  storeClientsList,
  clientsToErase,
  eraseClients,
} = clientsSlice.actions;

export default clientsSlice.reducer;
