import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todayChat: [],
  weeklyChat: [
    {
      author: "human",
      text: "tell me a joke",
    },
    {
      author: "bot",
      text: "Why don’t skeletons fight each other? They don’t have the guts!",
    },
    {
      author: "human",
      text: "how strong is dollar compared to turkish lira",
    },
    {
      author: "bot",
      text: "As of May 2024, the exchange rate for the US Dollar (USD) to the Turkish Lira (TRY) is approximately 1 USD to 32.22 TRY​ (Wise)​​ (XE)​. This reflects a significant strength of the dollar compared to the lira. The lira has been depreciating for some time due to various economic challenges in Turkey, including high inflation rates and political instability, which have impacted investor confidence and the overall economic outlook​ (Pound Sterling Live)​​ (Wise)​. For the most current rates and detailed historical data, you can refer to currency conversion services like Wise or XE​ (Wise)​​ (XE)​.",
    },
  ],
  monthlyChat: [],
};

const chatHistorySlice = createSlice({
  name: "chatHistory",
  initialState,
  reducers: {
    setTodayChat: (state, action) => {
      const tempChat = state.todayChat;
      state.todayChat = [
        { title: action.payload.title, chat: [...action.payload.newChat] },
        ...state.todayChat,
      ];
    },
    setWeeklyChat: (state, action) => {
      state.weeklyChat = [...action.payload];
    },
    setMonthlyChat: (state, action) => {
      state.monthlyChat = [...action.payload];
    },
    resetTodayChat: (state) => {
      state.monthlyChat = [];
    },
    resetWeeklyChat: (state) => {
      state.monthlyChat = [];
    },
    resetMonthlyChat: (state) => {
      state.monthlyChat = [];
    },
    resetHistory: (state) => {
      state.todayChat = [];
      state.weeklyChat = [];
      state.monthlyChat = [];
    },
  },
});

export const {
  setTodayChat,
  setWeeklyChat,
  setMonthlyChat,
  resetTodayChat,
  resetWeeklyChat,
  resetMonthlyChat,
  resetHistory,
} = chatHistorySlice.actions;

export default chatHistorySlice.reducer;
