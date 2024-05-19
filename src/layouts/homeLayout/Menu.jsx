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

export function Menu() {
  const dispatch = useDispatch();
  const currentChat = useSelector((state) => state.currentChat.currentChat);
  const todayChat = useSelector((state) => state.chatHistory.todayChat);
  const handleLogout = useHandleLogout();

  // adds present chat to today's history
  const handleNewChat = () => {
    // console.log(currentChat[0]?.text);
    // const choppedTitle = currentChat[0]?.text.split(" ");
    // const generatedTitle = `${choppedTitle[0]}...${choppedTitle
    //   .slice(-2)
    //   .join(" ")}`;
    // console.log(generatedTitle);
    // // dispatch(resetCurrentChat());

    // dispatch(setTodayChat({ title: generatedTitle, newChat: currentChat }));
    console.log("today's chat: ", todayChat);
  };
  return (
    <div className=" Customise-ScrollBar flex flex-col gap-[2rem] w-[90vw] md:w-[28vw] lg:w-[20vw] bg-custom-black pt-[5rem] md:pt-[2rem] pb-[2rem] generalPadding h-screen overflow-y-scroll  ">
      <h1 className=" text-[3rem] z-[2] text-shadow">Chat History</h1>
      <motion.div
        variants={selectionVariant}
        whileHover={"hoverEffect"}
        whileTap={"clickEffect"}
        onClick={() => handleNewChat()}
        className=" z-[2] flex flex-col gap-[2rem] w-[70%] md:w-[100%]"
      >
        <Button.Secondary>Create New Chats</Button.Secondary>
      </motion.div>

      <div className=" flexing-cols gap-[3rem] h-full md:h-[70%] mb-[3rem] md:mb-0 Customise-ScrollBar ">
        <div className=" flexing-cols gap-[2rem] md:gap-[1rem] ">
          <p>Today</p>
          <ul className=" flexing-cols gap-[1rem] md:gap-[1rem] ">
            {Array.from({ length: 2 }, (_, i) => i).map((_, idx) => (
              <ChatHistoryElement
                key={idx}
                addBg={true}
                keyword={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit"
                }
              />
            ))}
          </ul>
        </div>
        <div className=" flexing-cols gap-[2rem] md:gap-[1rem] ">
          <p>7 days</p>
          <ul className=" flexing-cols gap-[1rem] md:gap-[1rem] ">
            {Array.from({ length: 5 }, (_, i) => i).map((_, idx) => (
              <ChatHistoryElement
                addBg={true}
                key={idx}
                keyword={"How far is the moon"}
              />
            ))}
          </ul>
        </div>
        <div className=" flexing-cols gap-[2rem] md:gap-[1rem] ">
          <p>30 days</p>
          <ul className=" flexing-cols gap-[1rem] md:gap-[1rem] ">
            {Array.from({ length: 9 }, (_, i) => i).map((_, idx) => (
              <ChatHistoryElement
                addBg={true}
                key={idx}
                keyword={"Lorem ipsum dolor, sit amet consectetur"}
              />
            ))}
          </ul>
        </div>
      </div>
      <ul className=" hidden md:block">
        <li
          onClick={() => handleLogout()}
          className=" flex justify-between px-[1.5rem] items-center text-[1.4rem] max-w-[12rem] "
        >
          <img className=" max-h-[1.3rem]" src={LOGOUT} alt="logout" />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}
