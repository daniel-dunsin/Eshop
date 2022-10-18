import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./slices/modalSlice";
import { storeReducer } from "./slices/storeSlice";

const store = configureStore({
  reducer: {
    store: storeReducer,
    modal: modalReducer,
  },
});

export const RootState = typeof store.getState;
export const ActionDispatch = typeof store.dispatch;

export default store;
