import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../../components/data";

type storeStateType = {
  cart: Data[];
  storeItems: Data[];
  total: number;
  amount: number;
};

const initialState: storeStateType = {
  cart: [],
  storeItems: [],
  total: 0,
  amount: 0,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
});

export const storeReducer = storeSlice.reducer;
export const storeActions = storeSlice.actions;
