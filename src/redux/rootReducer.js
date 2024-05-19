import currentChatReducer from "./slices/currentChatSlice";
import authSliceReducer from "./slices/authSlice";
import chatHistoryReducer from "./slices/chatHistorySlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentChat: currentChatReducer,
  chatHistory: chatHistoryReducer,
  auth: authSliceReducer,
});

export { rootReducer };
