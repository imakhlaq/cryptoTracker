import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { TrendingCoins } from "../../api/configs";
import { TrendingCoinType } from "../../../typing";

type InitialType = {
  currency: string;
  symbol: string;
  trendingCoins: TrendingCoinType[];
};

const initialState: InitialType = {
  currency: "USD",
  symbol: "INR",
  trendingCoins: [],
};

export const fetchTrendingCoins = createAsyncThunk(
  "crypto/fetchTrendingCoins",
  async (currency: string, thunkAPI) => {
    const { data } = await axios.get(TrendingCoins(currency));
    return [...data];
  }
);

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
  extraReducers(builder) {
    builder.addCase(
      fetchTrendingCoins.fulfilled,
      (state, action: PayloadAction<TrendingCoinType[]>) => {
        state.trendingCoins = action.payload;
      }
    );
  },
});

export default cryptoSlice.reducer;

export const { changeCurrency } = cryptoSlice.actions;
