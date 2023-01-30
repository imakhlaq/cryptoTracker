import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

type initialType = {
  user: null | User;
};

const initialState: initialType = {
  user: null,
};

const authFirebase = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});
