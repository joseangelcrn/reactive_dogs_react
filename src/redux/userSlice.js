import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: localStorage.getItem('user'),
  },
  reducers: {
    login: (state,payload) => {
      state.data = payload
      localStorage.setItem('user',payload);
    },
    logout: (state) => {
      state.data = null;
      localStorage.removeItem('user');
    },
  },
});

export const {login,logout}  = userSlice.actions;

export default userSlice.reducer;
