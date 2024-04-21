import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: JSON.parse(localStorage.getItem('user')) ?? null,
  },
  reducers: {
    login: (state,action) => {
      state.data = action.payload
      localStorage.setItem('user',JSON.stringify(state.data));
    },
    logout: (state) => {
      state.data = null;
      localStorage.removeItem('user');
    },
  },
});

export const {login,logout}  = userSlice.actions;

export default userSlice.reducer;
