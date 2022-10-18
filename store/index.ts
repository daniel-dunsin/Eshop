import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./slices/modalSlice";
import { storeReducer } from "./slices/storeSlice";

const store = configureStore({
  reducer: {
    store: storeReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ActionDispatch = typeof store.dispatch;

export default store;
