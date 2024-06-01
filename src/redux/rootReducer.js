import currentChatReducer from "./slices/currentChatSlice";
import authSliceReducer from "./slices/authSlice";
import chatHistoryReducer from "./slices/chatHistorySlice";
import homeSliceReducer from "./slices/homeSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentChat: currentChatReducer,
  chatHistory: chatHistoryReducer,
  home: homeSliceReducer,
  auth: authSliceReducer,
});

export { rootReducer };
