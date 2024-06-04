import MESSAGE from "./../../assets/message.png";
import TRASH from "./../../assets/delete.png";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  overwriteCurrentChat,
  setRevisitTitle,
} from "../../redux/slices/currentChatSlice";
import { overwriteHistory } from "../../redux/slices/chatHistorySlice";
function ChatHistoryElement({
  keyword,
  category,
  index,
  addDelete = false,
  addBg = false,
}) {
  // const addNewChatToHistory = useAddNewChat();
  const History = useSelector((state) => state.chatHistory.history);
  // const currentChat = useSelector((state) => state.currentChat.currentChat);
  const dispatch = useDispatch();

  const proccessingVist = (idx) => {
    const title = History[idx].title;
    const convo = History[idx].chat;
    const updatedHistory = History.filter((value) => {
      return value !== History[idx] && value;
    });
    // save present chat to history
    // const generatedTitle = generateTitle(currentChat[0]?.text);
    // addNewChatToHistory(generatedTitle, currentChat);

    // initialise the vist logic
    dispatch(setRevisitTitle(title));
    dispatch(overwriteCurrentChat(convo));
    dispatch(overwriteHistory(updatedHistory));
    toast.success("successfully loaded history");
  };
  const handleVistHistory = (idx) => {
    if (category === "recently") {
      proccessingVist(idx);
    } else if (category === "longTimeAgo") {
      proccessingVist(idx + 3);
    }
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <li
      onClick={() => {
        handleVistHistory(index);
      }}
      className={` flex justify-between gap-[1rem] items-center h-[5rem] md:h-[4rem] w-full ${
        addBg && "bg-charcoal-gray"
      } rounded-2xl px-[1rem] py-[.7rem] `}
    >
      <div className=" flex gap-[2rem] justify-start items-center w-[90%] ">
        <img className=" max-h-[1.383rem] " src={MESSAGE} alt="conversation" />
        <p className=" text-[1.4rem] md:text-[1.29rem] truncate ">{keyword}</p>
      </div>
      {addDelete && <img className=" h-[1.8rem] " src={TRASH} alt="delete" />}
    </li>
  );
}

export default ChatHistoryElement;
