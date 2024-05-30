import { useDispatch } from "react-redux";
import { setIsLoading } from "../redux/slices/authSlice";
import { sendChat } from "../services/sendChat";
import { setCurrentChat } from "../redux/slices/currentChatSlice";

function useSetBotReply() {
  const dispatch = useDispatch();
  //   const loading = useSelector((state) => state.auth.isLoading);
  const setBotReply = async (value) => {
    dispatch(setIsLoading(true));
    try {
      const response = await sendChat(value);
      dispatch(setIsLoading(false));
      dispatch(setCurrentChat(response));
    } catch (error) {
      dispatch(setIsLoading(false));
      console.error("Failed to get chat response:", error);
      return { error: error.message, status: 500 };
    }
  };
  return setBotReply;
}

export default useSetBotReply;
