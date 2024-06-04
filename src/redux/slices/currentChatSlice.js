import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChat: [],
  revistTitle: "",
  currentSpeech: null,
  speechStarted: false,
};

const currentChatSlice = createSlice({
  name: "currentChat",
  initialState,
  reducers: {
    setCurrentChat: (state, action) => {
      state.currentChat = [...state.currentChat, action.payload];
    },
    overwriteCurrentChat: (state, action) => {
      state.currentChat = [...action.payload];
    },
    viewRevisitedChat: (state, action) => {
      state.currentChat = [...action.payload];
    },
    resetCurrentChat: (state) => {
      state.revistTitle = "";
      state.currentChat = [];
    },
    setCurrentSpeech: (state) => {
      state.currentSpeech = !state.currentSpeech;
    },
    setRevisitTitle: (state, action) => {
      state.revistTitle = action.payload;
    },
    setSpeechState: (state, action) => {
      state.speechStarted = action.payload;
    },
  },
});

export const {
  overwriteCurrentChat,
  setRevisitTitle,
  viewRevisitedChat,
  resetCurrentChat,
  setCurrentChat,
  setCurrentSpeech,
  setSpeechState,
} = currentChatSlice.actions;

export default currentChatSlice.reducer;
