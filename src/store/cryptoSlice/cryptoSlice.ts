import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { TrendingCoins, CoinList } from "../../api/configs";
import { CoinType } from "../../../typing";

type InitialType = {
  currency: string;
  symbol: string;
  trendingCoins: CoinType[];
  allCoins: CoinType[];
};

const initialState: InitialType = {
  currency: "USD",
  symbol: "$",
  trendingCoins: [],
  allCoins: [],
};

export const fetchTrendingCoins = createAsyncThunk(
  "crypto/fetchTrendingCoins",
  async (currency: string, thunkAPI) => {
    const { data } = await axios.get(TrendingCoins(currency));
    return [...data];
  }
);

export const fetchAllCoins = createAsyncThunk(
  "crypto/fetchAllCoins",
  async (currency: string, thunkAPI) => {
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

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
    builder
      .addCase(
        fetchTrendingCoins.fulfilled,
        (state, action: PayloadAction<CoinType[]>) => {
          state.trendingCoins = action.payload;
        }
      )
      .addCase(
        fetchAllCoins.fulfilled,
        (state, action: PayloadAction<CoinType[]>) => {
          state.allCoins = action.payload;
        }
      );
  },
});

export default cryptoSlice.reducer;

export const { changeCurrency } = cryptoSlice.actions;
