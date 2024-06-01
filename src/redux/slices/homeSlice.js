import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayMenu: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setDisplayMenu: (state) => {
      state.displayMenu = !state.displayMenu;
    },
    resetDisplayMenu: (state) => {
      state.displayMenu = false;
    },
  },
});

export const { setDisplayMenu, resetDisplayMenu } = homeSlice.actions;

export default homeSlice.reducer;
