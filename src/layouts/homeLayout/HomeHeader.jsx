import STARGGERDMENU from "./../../assets/menu.png";
import DOTTEDMENU from "./../../assets/dotted-menu.png";
import LOGOUT from "./../../assets/logout.png";
import { useEffect, useRef, useState } from "react";
import { useHandleLogout } from "../../hooks/useHandleLogout";
import { useTranslation } from "react-i18next";
import Translator from "../../components/ui/Translator";

import LAB1 from "./../../assets/near east lab pic1.jpg";
import LAB2 from "./../../assets/near east lab pic2.jpg";

export function HomeHeader({ handleClick }) {
  const { t } = useTranslation();
  const [openLogoutMenu, setOpenLogoutMenu] = useState(false);
  const [isLangON, setIsLangON] = useState(false);
  const logoutMenuRef = useRef();
  const logoutBtnuRef = useRef();
  const handleLogout = useHandleLogout();

  const handleLogoutMenu = () => {
    setOpenLogoutMenu(!openLogoutMenu);
  };

  // listening to outside cilck, to close the logout menu
  useEffect(function () {
    let handleClickOutside = (e) => {
      if (
        !logoutMenuRef?.current?.contains(e.target) &&
        !logoutBtnuRef?.current?.contains(e.target)
      )
        setOpenLogoutMenu(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      className={` w-full h-[15svh] md:h-[12svh] md:pt-5 flex justify-between md:justify-center items-center generalPadding `}
    >
      <button className=" block md:hidden " onClick={() => handleClick()}>
        <img src={STARGGERDMENU} alt="menu" />
      </button>
      <div className=" flex gap-4 items-center justify-center">
        <h1 className=" text-[2rem]">MIRA</h1>
        <figure className=" flex flex-col gap-2 w-full h-fit">
          <img
            className=" max-w-[12rem] object-contain rounded-lg"
            src={LAB1}
            alt="near east lab"
          />
          <img
            className=" max-w-[12rem] object-contain rounded-lg"
            src={LAB2}
            alt="near east lab"
          />
        </figure>
      </div>
      <div className=" relative block md:hidden">
        <button
          ref={logoutMenuRef}
          onClick={() => handleLogoutMenu()}
          className=" "
        >
          <img src={DOTTEDMENU} alt="menu" />
        </button>
        <ul
          ref={logoutBtnuRef}
          className={` z-[999] bg-custom-black absolute bottom-[-10rem] ${
            openLogoutMenu ? "translate-x-[-10rem]" : "translate-x-[100rem]"
          } flex gap-[1rem] flex-col justify-center items-start min-w-[5rem] w-[10rem] h-fit py-[1rem] px-[1.5rem] rounded-3xl ring-1 ring-charcoal-gray overflow-hidden duration-300`}
        >
          <li
            onClick={() => handleLogout()}
            className=" flex gap-2 items-center w-full "
          >
            <p>{t("LOGOUT")}</p>
            <img className=" max-h-[1.3rem]" src={LOGOUT} alt="logout" />
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
    </div>
  );
}
