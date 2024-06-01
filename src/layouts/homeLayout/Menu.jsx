import "./homeLayout.scss";

import ChatHistoryElement from "../../components/ui/ChatHistoryElement";
import { useHandleLogout } from "../../hooks/useHandleLogout";
import * as Button from "./../../components/Buttons/index";

import LOGOUT from "./../../assets/logout.png";
import { motion } from "framer-motion";
import { selectionVariant } from "../../effect";
import { useDispatch, useSelector } from "react-redux";
import { setTodayChat } from "../../redux/slices/chatHistorySlice";
import { resetCurrentChat } from "../../redux/slices/currentChatSlice";
import { useTranslation } from "react-i18next";
import Translator from "../../components/ui/Translator";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { resetDisplayMenu } from "../../redux/slices/homeSlice";
// import { resetDisplayMenu } from "../../redux/slices/homeSlice";

export function Menu() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isLangON, setIsLangON] = useState(false);
  const [recentChat, setRecentChat] = useState([]);
  const [longTimeAgo, setLongTimeAgo] = useState([]);
  const currentChat = useSelector((state) => state.currentChat.currentChat);
  const todayChat = useSelector((state) => state.chatHistory.todayChat);
  const handleLogout = useHandleLogout();

  // adds present chat to today's history
  const handleNewChat = () => {
    if (currentChat[0]?.text) {
      const choppedTitle = currentChat[0]?.text.split(" ");
      const generatedTitle = `${choppedTitle[0]}...${choppedTitle
        .slice(-2)
        .join(" ")}`;
      // console.log(generatedTitle);
      // dispatch(setTodayChat({ title: generatedTitle, newChat: currentChat }));
      dispatch(resetDisplayMenu());
      dispatch(resetCurrentChat());
    } else {
      toast.error(
        "Current chat is empty, make some querries before requesting a new chat",
      );
    }
  };

  useEffect(() => {
    const recentChat = todayChat.slice(0, 3);
    const chatHistory = todayChat.slice(3);
    setLongTimeAgo(chatHistory);
    setRecentChat(recentChat);
    // dispatch(resetDisplayMenu());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="Customise-ScrollBar flex flex-col gap-[2rem] w-[90vw] md:w-[28vw] lg:w-[20vw] bg-custom-black pt-[5rem] md:pt-[2rem] pb-[2rem] generalPadding h-screen overflow-y-scroll  ">
      <h1 className=" text-[3rem] z-[2] text-shadow">{t("CHAT_HISTORY")}</h1>
      <motion.div
        variants={selectionVariant}
        whileHover={"hoverEffect"}
        whileTap={"clickEffect"}
        onClick={() => handleNewChat()}
        className=" z-[2] flex flex-col gap-[2rem] w-[70%] md:w-[100%]"
      >
        <Button.Secondary>{t("CREATE_NEW_CHATS")}</Button.Secondary>
      </motion.div>

      <div className=" flexing-cols gap-[3rem] h-full md:h-[75%] mb-[3rem] md:mb-0 Customise-ScrollBar ">
        <div className=" flexing-cols gap-[2rem] md:gap-[1rem] ">
          <p>{t("RECENTLY")}</p>
          <ul className=" flexing-cols gap-[1rem] md:gap-[1rem] ">
            {recentChat.map((obj, idx) => (
              <ChatHistoryElement key={idx} addBg={true} keyword={obj.title} />
            ))}
          </ul>
        </div>
        <div className=" flexing-cols gap-[2rem] md:gap-[1rem] ">
          <p>{`${t("LONG_TIME_AGO")}`}</p>
          <ul className=" flexing-cols gap-[1rem] md:gap-[1rem] ">
            {longTimeAgo.map((obj, idx) => (
              <ChatHistoryElement addBg={true} key={idx} keyword={obj.title} />
            ))}
          </ul>
        </div>
      </div>
      <ul className=" hidden md:flex flex-col gap-5 h-[25%] cursor-pointer px-[2rem] text-[1.4rem] max-w-[12rem] overflow-hidden">
        <li
          onClick={() => handleLogout()}
          className=" flex justify-between items-center  "
        >
          <img className=" max-h-[1.3rem]" src={LOGOUT} alt="logout" />
          <p>Logout</p>
        </li>
        <li>
          <p onClick={() => setIsLangON(!isLangON)}>{t("LANGUAGE")}</p>
          <div
            className={` ${
              isLangON ? "translate-x-[0%]" : "translate-x-[200%]"
            } duration-300`}
          >
            <Translator disableFix={false} />
          </div>
        </li>
      </ul>
    </div>
  );
}
