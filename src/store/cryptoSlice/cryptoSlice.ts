import { createSlice } from "@reduxjs/toolkit";

type initialType = {
  name: string;
};

const initialState: initialType[] = [];

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
});

export default cryptoSlice.reducer;
