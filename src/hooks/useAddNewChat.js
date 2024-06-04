import { useDispatch } from "react-redux";
import { setHistory } from "../redux/slices/chatHistorySlice";
import { resetCurrentChat } from "../redux/slices/currentChatSlice";
import { resetDisplayMenu } from "../redux/slices/homeSlice";
import toast from "react-hot-toast";

function useAddNewChat() {
  const dispatch = useDispatch();
  const addNewChatToHistory = (title, convos) => {
    if (title || convos) {
      dispatch(setHistory({ title: title, newChat: convos }));
      dispatch(resetCurrentChat());
      dispatch(resetDisplayMenu());
      // eslint-disable-next-line no-restricted-globals
      location.reload();
      return;
    }
    toast.error(
      "Current chat is empty, make some querries before requesting a new chat",
    );
  };

  return addNewChatToHistory;
}

export default useAddNewChat;
