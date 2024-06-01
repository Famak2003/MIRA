import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChat: [],
  currentSpeech: null,
};

const currentChatSlice = createSlice({
  name: "currentChat",
  initialState,
  reducers: {
    setCurrentChat: (state, action) => {
      state.currentChat = [...state.currentChat, action.payload];
    },
    resetCurrentChat: (state) => {
      state.currentChat = [];
    },
    setCurrentSpeech: (state) => {
      state.currentSpeech = !state.currentSpeech;
    },
  },
});

export const { resetCurrentChat, setCurrentChat, setCurrentSpeech } =
  currentChatSlice.actions;

export default currentChatSlice.reducer;
