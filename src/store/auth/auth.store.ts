import { createSlice } from "@reduxjs/toolkit";
import { initialAuthState } from "./_state";

export const authReducers = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authReducers.actions;
export default authReducers.reducer;
