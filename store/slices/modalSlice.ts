import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  isModalOpen: boolean;
};

const initialState: initialStateType = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
});

export const modalReducer = modalSlice.reducer;
export const modalActions = modalSlice.actions;
