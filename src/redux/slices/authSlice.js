import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLogin: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.userLogin = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUserLogin, setIsLoading } = authSlice.actions;

export default authSlice.reducer;
