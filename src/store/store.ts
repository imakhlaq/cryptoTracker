import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./cryptoSlice/cryptoSlice";

const store = configureStore({
  reducer: { crypto: cryptoReducer },
});
export default store;

//type for our useSelector state type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
