import { createSlice } from "@reduxjs/toolkit";

// You know i should have deleted the comments, but just for you to know the original ideal, before i switched it to the present one. Anyways have fun //

const initialState = {
  history: [],
  recently: [],
  longTimeAgo: [],
  // weeklyChat: [
  //   {
  //     author: "human",
  //     text: "tell me a joke",
  //   },
  //   {
  //     author: "bot",
  //     text: "Why don’t skeletons fight each other? They don’t have the guts!",
  //   },
  //   {
  //     author: "human",
  //     text: "how strong is dollar compared to turkish lira",
  //   },
  //   {
  //     author: "bot",
  //     text: "As of May 2024, the exchange rate for the US Dollar (USD) to the Turkish Lira (TRY) is approximately 1 USD to 32.22 TRY​ (Wise)​​ (XE)​. This reflects a significant strength of the dollar compared to the lira. The lira has been depreciating for some time due to various economic challenges in Turkey, including high inflation rates and political instability, which have impacted investor confidence and the overall economic outlook​ (Pound Sterling Live)​​ (Wise)​. For the most current rates and detailed historical data, you can refer to currency conversion services like Wise or XE​ (Wise)​​ (XE)​.",
  //   },
  // ],
  // monthlyChat: [],
};

const chatHistorySlice = createSlice({
  name: "chatHistory",
  initialState,
  reducers: {
    setHistory: (state, action) => {
      const tempChat = state.history || [];
      state.history = [
        { title: action.payload.title, chat: [...action.payload.newChat] },
        ...tempChat,
      ];
    },
    addRevisitedChat: (state, action) => {
      state.history = [{ ...action.payload }, ...state.history];
    },
    setRecently: (state, action) => {
      state.recently = [...action.payload];
    },
    setLongTimeAgo: (state, action) => {
      state.longTimeAgo = [...action.payload];
    },
    overwriteHistory: (state, action) => {
      state.history = [...action.payload];
    },
    resetHistory: (state) => {
      state.history = [];
    },

    // setWeeklyChat: (state, action) => {
    //   state.weeklyChat = [...action.payload];
    // },
    // setMonthlyChat: (state, action) => {
    //   state.monthlyChat = [...action.payload];
    // },
    // resetHistory: (state) => {
    //   state.monthlyChat = [];
    // },
    // resetWeeklyChat: (state) => {
    //   state.monthlyChat = [];
    // },
    // resetMonthlyChat: (state) => {
    //   state.monthlyChat = [];
    // },
    // resetHistory: (state) => {
    //   state.history = [];
    //   state.weeklyChat = [];
    //   state.monthlyChat = [];
    // },
  },
});

export const {
  setHistory,
  addRevisitedChat,
  setRecently,
  overwriteHistory,
  setLongTimeAgo,
  resetHistory,
  // setWeeklyChat,
  // setMonthlyChat,
  // resetHistory,
  // resetWeeklyChat,
  // resetMonthlyChat,
} = chatHistorySlice.actions;

export default chatHistorySlice.reducer;
