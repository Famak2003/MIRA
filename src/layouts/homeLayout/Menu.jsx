import "./homeLayout.scss";

import ChatHistoryElement from "../../components/ui/ChatHistoryElement";
import { useHandleLogout } from "../../hooks/useHandleLogout";
import * as Button from "./../../components/Buttons/index";

import LOGOUT from "./../../assets/logout.png";
import { motion } from "framer-motion";
import { selectionVariant } from "../../effect";
import { useDispatch, useSelector } from "react-redux";
import { resetHistory } from "../../redux/slices/chatHistorySlice";

import { useTranslation } from "react-i18next";
import Translator from "../../components/ui/Translator";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import generateTitle from "../../utilities/generateTitle";
import useAddNewChat from "../../hooks/useAddNewChat";

export function Menu({ setShowMenu }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isLangON, setIsLangON] = useState(false);
  const [recentChat, setRecentChat] = useState();
  const [longTimeAgo, setLongTimeAgo] = useState();
  const [isHistoryCleared, setIsHistoryCleared] = useState();
  const currentChat = useSelector((state) => state.currentChat.currentChat);
  const history = useSelector((state) => state.chatHistory.history);
  const revisitTitle = useSelector((state) => state.currentChat.revistTitle);

  // custom hook
  const addNewChatToHistory = useAddNewChat();

  const handleLogout = useHandleLogout();

  // adds present chat to the history
  const handleNewChat = () => {
    if (revisitTitle) {
      //This is to check if the new chat is a revisited chat
      addNewChatToHistory(revisitTitle, currentChat);
      return;
    } else if (currentChat[0]?.text) {
      const generatedTitle = generateTitle(currentChat[0]?.text);
      addNewChatToHistory(generatedTitle, currentChat);
      return;
    } else {
      toast.error(
        "Current chat is empty, make some querries before requesting a new chat",
      );
    }
  };

  const handleResetHistory = () => {
    // console.log(history.length > 1 ? "shdjfh" : "shay i told you");
    dispatch(resetHistory());
    // eslint-disable-next-line
    location.reload();
  };

  useEffect(() => {
    setIsHistoryCleared(history.length > 0);

    // group the chats
    const recentChat = history.slice(0, 3);
    const chatHistory = history.slice(3);
    setLongTimeAgo(chatHistory);
    setRecentChat(recentChat);

    return;
    // eslint-disable-next-line
  }, []);
  return (
    <div className="Customise-ScrollBar flex flex-col gap-[2rem] w-[90vw] md:w-[28vw] lg:w-[20vw] bg-custom-black pt-[5rem] md:pt-[2rem] pb-[2rem] generalPadding h-screen overflow-y-scroll  ">
      <h1 className=" text-[2.5rem] lg:text-[3rem] z-[2] text-shadow">
        {t("CHAT_HISTORY")}
      </h1>
      <motion.div
        variants={selectionVariant}
        whileHover={"hoverEffect"}
        whileTap={"clickEffect"}
        onClick={() => handleNewChat()}
        className=" z-[2] flex flex-col gap-[2rem] w-[70%] md:w-[100%]"
      >
        <Button.Secondary>{t("CREATE_NEW_CHATS")}</Button.Secondary>
      </motion.div>

      {/* // There is a better way of implemeting this, but the time for developement is limited. Anyways happy fixing :)=) // */}

      <div className=" flexing-cols gap-[3rem] h-full md:h-[75%] mb-[3rem] md:mb-0 Customise-ScrollBar ">
        {isHistoryCleared ? (
          <>
            <div className=" flexing-cols gap-[2rem] md:gap-[1rem] ">
              <p>{t("RECENTLY")}</p>
              <ul className=" flexing-cols gap-[1rem] md:gap-[1rem] ">
                {recentChat?.map((obj, idx) => (
                  <ChatHistoryElement
                    key={idx}
                    category={"recently"}
                    index={idx}
                    addBg={true}
                    keyword={obj.title}
                  />
                ))}
              </ul>
            </div>
            {longTimeAgo.length > 0 && (
              <div className=" flexing-cols gap-[2rem] md:gap-[1rem] ">
                <p>{`${t("LONG_TIME_AGO")}`}</p>
                <ul className=" flexing-cols gap-[1rem] md:gap-[1rem] ">
                  {longTimeAgo?.map((obj, idx) => (
                    <ChatHistoryElement
                      key={idx}
                      category={"longTimeAgo"}
                      index={idx}
                      addBg={true}
                      keyword={obj.title}
                    />
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <p className=" greetings text-custom-white mt-[15%] pl-3 text-[1.5rem] ">
            No History Recorded Yet🥲
          </p>
        )}
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
      {isHistoryCleared && (
        <motion.div
          className=" z-[2] flex flex-col gap-[2rem] w-[70%] md:w-[100%]"
          variants={selectionVariant}
          whileHover={"hoverEffect"}
          whileTap={"clickEffect"}
        >
          <Button.Secondary handleClick={handleResetHistory}>
            {t("CLEAR_HISTORY")}
          </Button.Secondary>
        </motion.div>
      )}
    </div>
  );
}
