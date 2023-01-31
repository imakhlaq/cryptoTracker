import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./cryptoSlice/cryptoSlice";
import authSlice from "./cryptoSlice/authSlice";

const store = configureStore({
  reducer: { crypto: cryptoReducer, auth: authSlice },
});
export default store;

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>; // Here we export the store's state
