import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from "./cryptoSlice/cryptoSlice";

const store = configureStore({
  reducer: { crypto: cryptoSlice },
});
export default store;
