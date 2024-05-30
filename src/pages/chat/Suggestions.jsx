import ARROWUP from "./../../assets/icons8-arrow-up-24.png";
import ARROWDOWN from "./../../assets/icons8-arrow-down-24.png";
import { motion } from "framer-motion";
import { selectionVariant } from "../../effect";
import { randomQuestions } from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { debouncer } from "../../utilities/debouncer";
import useSetBotReply from "../../hooks/useSetBotReply";
import { setCurrentChat } from "../../redux/slices/currentChatSlice";

export default function Suggestions() {
  const dispatch = useDispatch();
  const setBotReply = useSetBotReply();
  const conversation = useSelector((state) => state.currentChat.currentChat);
  const [openSuggestionBox, setOpenSuggestionBox] = useState(false);

  const handleRandQuest = (e) => {
    const randquestion = { text: e.target.textContent };
    const userInput = { author: "human", ...randquestion };
    console.log(userInput);
    if (!debouncer(userInput, conversation)) {
      return;
    } else {
      dispatch(setCurrentChat(userInput));
      setBotReply(randquestion);
    }
  };
  return (
    <>
      <figure
        onClick={() => setOpenSuggestionBox(!openSuggestionBox)}
        className=" w-fit hidden md:block "
      >
        <img
          className=" w-full object-contain scale-75 duration-300"
          src={openSuggestionBox ? ARROWDOWN : ARROWUP}
          alt="close suggestion"
        />
      </figure>
      <ul
        className={` blurrBG absolute rounded-3xl top-[-5rem] left-0 hidden md:flex w-full justify-between items-center duration-300 ${
          openSuggestionBox
            ? "translate-y-0 opacity-1"
            : " translate-y-[10rem] z-[-90] opacity-0"
        } `}
      >
        {randomQuestions.map((obj, idx) => {
          return (
            <motion.li
              variants={selectionVariant}
              whileHover={"hoverEffect"}
              whileTap={"clickEffect"}
              key={idx}
              onClick={(e) => handleRandQuest(e)}
              className="w-fit rounded-3xl bg-custom-black p-[1.5rem] truncate"
            >
              {obj.text}
            </motion.li>
          );
        })}
      </ul>
    </>
  );
}
