import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChat: [
    {
      author: "bot",
      text: "Welcome to mira an AI study assistant for student. How can i help you today?",
    },
  ],
  // currentChat: [
  //   {
  //     author: "human",
  //     text: "how are you?",
  //   },
  //   {
  //     author: "bot",
  //     text: "I am ChatGPT, a conversational AI language model developed by OpenAI. I am designed to process natural language and respond to various queries and conversations in a way that simulates human-like conversation. My purpose is to assist and provide helpful responses to users who interact with me.",
  //   },
  //   {
  //     author: "human",
  //     text: "Who are you?",
  //   },
  //   {
  //     author: "bot",
  //     text: "As an AI language model, I don't have feelings or emotions like humans do. However, I'm functioning properly and ready to assist you in any way I can. How can I help you today?",
  //   },
  //   {
  //     author: "bot",
  //     text: "But... how are you",
  //   },
  //   {
  //     author: "human",
  //     text: "How is your life",
  //   },
  //   {
  //     author: "bot",
  //     text: "Sorry... i do not have a feeling, or to be considered as such, because i am an ai developed to make your lifes easier not to catch feelings idiot",
  //   },
  //   {
  //     author: "human",
  //     text: "Damnn you are on fire",
  //   },
  //   {
  //     author: "bot",
  //     text: "No human, actually i am a software which means i am neither cool or hot dont be stupid human",
  //   },
  //   {
  //     author: "human",
  //     text: "damn son, who made you",
  //   },
  //   {
  //     author: "bot",
  //     text: "Humans did, what did you think, an AI that wants to take over the world??? ",
  //   },
  //   {
  //     author: "human",
  //     text: "Okay chill now its geeting too much. Whats your name",
  //   },
  //   {
  //     author: "bot",
  //     text: "Chill or what are you going to do? pull the plugg??? I exist outside you computer. switching this app off will only stop you from using my features, you lose dumb ass",
  //   },
  // ],
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
  },
});

export const { resetCurrentChat, setCurrentChat } = currentChatSlice.actions;

export default currentChatSlice.reducer;
