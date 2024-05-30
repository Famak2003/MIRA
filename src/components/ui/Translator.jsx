import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import TR from "./../../assets/turkey.png";
import EN from "./../../assets/english.png";
import { selectionVariant } from "../../effect";

function Translator({ disableFix = true }) {
  const { i18n } = useTranslation();

  const handleLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div
      onChange={(e) => e.target.value}
      className={` ${
        disableFix ? "fixed left-[3rem] top-2" : ""
      } flex gap-2 p-2 bg-transparent border-0 `}
    >
      <motion.button
        variants={selectionVariant}
        whileHover={"hoverEffect"}
        whileTap={"clickEffect"}
        className=" "
        onClick={() => handleLang("en")}
        disabled={i18n.resolvedLanguage === "en"}
      >
        <img className=" max-w-[2rem]" src={EN} alt="english" />
        <p>en</p>
      </motion.button>

      <motion.button
        variants={selectionVariant}
        whileHover={"hoverEffect"}
        className=" "
        onClick={() => handleLang("tr")}
        disabled={i18n.resolvedLanguage === "tr"}
      >
        <img className=" max-w-[2rem]" src={TR} alt="turkish" />
        <p>tr</p>
      </motion.button>
    </div>
  );
}

export default Translator;
