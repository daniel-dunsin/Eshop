import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type initialStateType = {
  isModalOpen: boolean;
};

const initialState: initialStateType = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal: (state: RootState) => {
      state.isModalOpen = false;
    },
    openModal: (state: RootState) => {
      state.isModalOpen = true;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const modalActions = modalSlice.actions;
