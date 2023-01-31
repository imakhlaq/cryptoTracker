import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});
export const { addUser, removeUser } = authFirebase.actions;
