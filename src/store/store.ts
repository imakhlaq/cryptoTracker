import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./cryptoSlice/cryptoSlice";

const store = configureStore({
  reducer: { crypto: cryptoReducer },
});
export default store;

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>; // Here we export the store's state
