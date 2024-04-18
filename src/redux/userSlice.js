import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
  },
  reducers: {
    login: (state,payload) => {
      state.data = payload
    },
    logout: (state) => {
      state.data = null;
    },
  },
});

export const {login,logout}  = userSlice.actions;

export default userSlice.reducer;
