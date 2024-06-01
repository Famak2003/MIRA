import "./chat.scss";
import LOADING from "./../../assets/SVKl.gif";
import SEND from "./../../assets/send-message.png";

import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Form, useActionData } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { setCurrentChat } from "../../redux/slices/currentChatSlice";
import scrollToBottom from "../../utilities/scrollToBottom";
import { sendChat } from "../../services/sendChat";
import Convo from "./Convo";
import Suggestions from "./Suggestions";
import { setIsLoading } from "../../redux/slices/authSlice";
// import useSetBotReply from "../../hooks/useSetBotReply";
import { debouncer } from "../../utilities/debouncer";
import { useTranslation } from "react-i18next";

export const randomQuestions = [
  { text: "Write a short fun code" },
  { text: "Who made exam compusory for students" },
  { text: "How far is the moon from earth" },
];

function Chat() {
  const { t } = useTranslation();
  const chatRef = useRef();
  const [chatMessage, setChatMessage] = useState("");

  const loading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const actionResult = useActionData();
  const conversation = useSelector((state) => state.currentChat.currentChat);

  const handleSubmit = () => {
    dispatch(setIsLoading(true));
    dispatch(setCurrentChat({ author: "human", text: chatMessage }));
    setChatMessage("");
  };

  useEffect(() => {
    // Check if text has already been appended, else add it to the conversation
    const debounceResponse = debouncer(actionResult, conversation);
    if (!debounceResponse) {
      return;
    }
    dispatch(setIsLoading(false));
    dispatch(setCurrentChat(actionResult));
    // eslint-disable-next-line
  }, [dispatch, actionResult]);

  useLayoutEffect(() => {
    scrollToBottom(chatRef);
  }, [conversation]);

  return (
    <div className=" flex-auto flex flex-col justify-between gap-[1rem] w-full h-[85svh] md:h-[93svh] ">
      <ul className=" Customise-ScrollBar w-full flex flex-col gap-[3rem] overflow-y-scroll generalPadding h-full  ">
        {conversation.map((obj, idx) => (
          <Convo key={idx} idx={idx} obj={obj} />
        ))}
        <p
          className={` ${
            conversation.length < 1 ? "block" : "hidden"
          } greetings text-custom-white mt-[25%] text-[1.5rem] text-center `}
        >
          {t("WELCOME")}
        </p>
        {/* used for scrolling to the end of the chat */}
        <div className="" ref={chatRef}></div>
      </ul>

      <div className=" relative h-fit w-full rounded-t-[2rem] bg-charcoal-gray px-[2rem] mobile:px-[1rem] py-[2.5rem] mobile:py-[1.5rem] ">
        <Suggestions />
        <Form
          method="POST"
          onSubmit={() => handleSubmit()}
          className=" flex justify-between gap-[1rem] items-center p-0 mobile:px-[2rem] "
        >
          <Input
            name="text"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            className="textInput text-[1.3rem] rounded-[2.5rem] h-[5.3rem] w-[85%] bg-custom-black border-none px-[2rem] "
            placeholder={t("WRITE_YOUR_QUESTIONS")}
          />
          <button
            className={`  flex justify-center items-center max-h-[4rem] w-[4.1rem] rounded-full overflow-hidden duration-300 ${
              loading ? " bg-black" : "pt-[.7rem] bg-custom-red"
            } `}
          >
            <img
              className={` ${
                loading ? " h-full w-full " : "h-[80%] w-[100%] scale-[60%]"
              } `}
              src={loading ? LOADING : SEND}
              alt="send"
            />
          </button>
        </Form>
      </div>
    </div>
  );
}
export async function action({ request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    return await sendChat(data);
  } catch (error) {
    console.error("Failed to get chat response:", error);
    return { error: error.message, status: 500 };
  }
}

export default Chat;
