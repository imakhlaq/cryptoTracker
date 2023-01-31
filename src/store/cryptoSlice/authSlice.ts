import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

type Myuser = {
  email: string | null | undefined;
  userName: string | null | undefined;
  uid: string | undefined;
  picture: string | null | undefined;
};

type initialType = {
  user: null | Myuser;
};

const initialState: initialType = {
  user: null,
};

const authFirebase = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<Myuser | null>) {
      console.log(state.user);
      state.user = action.payload;
      console.log(state.user);
    },
    removeUser(state) {
      state.user = null;
    },
  },
});
export const { addUser, removeUser } = authFirebase.actions;
export default authFirebase.reducer;
