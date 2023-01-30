import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  TrendingCoins,
  CoinList,
  SingleCoin,
  HistoricalChart,
} from "../../api/configs";
import { CoinType, History } from "../../../typing";

type InitialType = {
  currency: string;
  symbol: string;
  trendingCoins: CoinType[];
  allCoins: CoinType[];
  singleCoin: any;
  loading: boolean;
  error: null | string;
  history: History;
};

const initialState: InitialType = {
  currency: "USD",
  symbol: "$",
  trendingCoins: [],
  allCoins: [],
  singleCoin: {},
  loading: false,
  error: null,
  history: {} as History,
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
    return [...data];
  }
);

export const fetchSingleCoin = createAsyncThunk(
  "crypto/fetchSingleCoin",
  async (id: string, thunkApi) => {
    try {
      const { data } = await axios.get(SingleCoin(id));
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

type HistoryType = {
  id: string | undefined;
  days: number;
  currency: string;
};

export const fetchCoinHistory = createAsyncThunk(
  "crypto/fetchCoinHistory",
  async ({ id, days, currency }: HistoryType) => {
    const { data } = await axios.get(HistoricalChart(id, days, currency));
    return data;
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
      )
      .addCase(fetchSingleCoin.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchSingleCoin.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log(action.payload);
          state.singleCoin = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchSingleCoin.rejected, (state) => {
        state.loading = false;
        state.error = "error";
      })
      .addCase(
        fetchCoinHistory.fulfilled,
        (state, action: PayloadAction<History>) => {
          state.history = action.payload;
        }
      );
  },
});

export default cryptoSlice.reducer;

export const { changeCurrency } = cryptoSlice.actions;
