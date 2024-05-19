import STARGGERDMENU from "./../../assets/menu.png";
import DOTTEDMENU from "./../../assets/dotted-menu.png";
import LOGOUT from "./../../assets/logout.png";
import { useEffect, useRef, useState } from "react";
import { useHandleLogout } from "../../hooks/useHandleLogout";

export function HomeHeader({ handleClick }) {
  const [openLogoutMenu, setOpenLogoutMenu] = useState(false);
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
      className={` w-full h-[15svh] md:h-[7svh] md:pt-0 flex justify-between md:justify-center items-center generalPadding `}
    >
      <button className=" block md:hidden " onClick={() => handleClick()}>
        <img src={STARGGERDMENU} alt="menu" />
      </button>
      <h1 className=" text-[2rem]">MIRA</h1>
      <div className=" relative block md:hidden `">
        <button
          ref={logoutMenuRef}
          onClick={() => handleLogoutMenu()}
          className=" "
        >
          <img src={DOTTEDMENU} alt="menu" />
        </button>
        <ul
          ref={logoutBtnuRef}
          style={{ display: `${openLogoutMenu ? "block" : "none"}` }}
          className=" z-[999] bg-custom-black absolute bottom-[-4rem] translate-x-[-8rem] flex flex-col justify-center items-center min-w-[5rem] w-[10rem] py-[1rem] px-[0.5rem] rounded-3xl ring-1 ring-charcoal-gray duration-300"
        >
          <li
            onClick={() => handleLogout()}
            className=" flex justify-between px-[1.5rem] items-center w-full "
          >
            <p>Logout</p>
            <img className=" max-h-[1.3rem]" src={LOGOUT} alt="logout" />
          </li>
        </ul>
      </div>
    </div>
  );
}
