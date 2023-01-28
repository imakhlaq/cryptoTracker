import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialType = {
  currency: string;
  symbol: string;
};

const initialState: InitialType = { currency: "USD", symbol: "INR" };

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    changeCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
      if (state.currency === "INR") {
        state.symbol = "₹";
      } else {
        state.symbol = "$";
      }
    },
  },
});

export default cryptoSlice.reducer;

export const { changeCurrency } = cryptoSlice.actions;
