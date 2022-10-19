import { createSlice } from "@reduxjs/toolkit";
import { ActionDispatch, RootState } from "..";
import data, { Data } from "../../components/data";

type storeStateType = {
  cart: Data[];
  storeItems: Data[];
  total: number;
  amount: number;
};

type TotalItems = {
  total: number;
  amount: number;
};

const initialState: storeStateType = {
  cart: [],
  storeItems: data,
  total: 0,
  amount: 0,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addToCart: (state: RootState, action: ActionDispatch) => {
      const item = state.storeItems.find(
        (item: Data) => item.id === action.payload.id
      );
      item.amount = 1;
      item.total = item.price;
      state.cart = [...state.cart, item];
    },
    increase: (state: RootState, action: ActionDispatch) => {
      state.cart = state.cart.map((item: Data) => {
        if (item.id === action.payload.id) {
          item.amount = item.amount + 1;
          item.total = item.amount * item.price;
        }
        return item;
      });
    },
    decrease: (state: RootState, action: ActionDispatch) => {
      state.cart = state.cart.map((item: Data) => {
        if (item.id === action.payload.id) {
          item.amount = item.amount - 1;
          item.total = item.amount * item.price;
        }
        return item;
      });
    },
    remove: (state: RootState, action: ActionDispatch) => {
      state.cart = state.cart.filter(
        (item: Data) => item.id !== action.payload.id
      );
      state.storeItems = state.storeItems.map((item: Data) => {
        if (item.id === action.payload.id) {
          item.amount = 0;
          item.total = 0;
        }
        return item;
      });
    },
    getTotals: (state: RootState) => {
      const { total, amount } = state.cart.reduce(
        (totalItems: TotalItems, currItem: Data) => {
          const { amount, price } = currItem;
          const total = amount * price;
          totalItems.total += total;
          totalItems.amount += amount;
          return totalItems;
        },
        { total: 0, amount: 0 }
      );
      state.total = total;
      state.amount = amount;
    },
  },
});

export const storeReducer = storeSlice.reducer;
export const storeActions = storeSlice.actions;
