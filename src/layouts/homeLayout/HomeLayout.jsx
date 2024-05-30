import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import "./../layouts.css";
import { Outlet } from "react-router-dom";

import ARROWUP from "./../../assets/arrow-up.png";
import { useState } from "react";
import useIsWindowScrolled from "../../hooks/useIsWindowScrolled";
import { useGetCurrentPage } from "../../hooks";
import { Menu } from "./Menu";
import { CardEffect } from "./CardEffect";
import { HomeHeader } from "./HomeHeader";

function Home() {
  const location = useLocation();
  const userStatus = useSelector((state) => state.auth.userLogin);
  // console.log(userStatus)

  const curLocation = useGetCurrentPage();
  const [disabledMenu, setDisableMenu] = useState(false);
  const [dispayMenu, setDispayMenu] = useState(false);

  const isScrolled = useIsWindowScrolled();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", //smooth scrolling animation
    });
  };

  const handleClick = () => {
    if (curLocation[0] === "chat-history") {
      setDisableMenu(!disabledMenu);
    } else {
      setDispayMenu(!dispayMenu);
    }
  };

  return userStatus ? (
    <div className=" relative flex flex-col h-fit overflow-hidden w-full ">
      <div
        className={` home-container flex md:gap-[2vw] w-fit md:w-full ${
          dispayMenu ? "translate-x-0" : "translate-x-[-90vw] md:translate-x-0"
        } duration-700 h-full `}
      >
        {/* // Chat-history Menu // */}
        <Menu />
        {/* // Children // */}
        <div
          className={` box flex flex-col relative h-fit w-screen md:w-[70vw] lg:w-[78vw]  ${
            dispayMenu
              ? "rotate-[-10deg] rounded-3xl md:rounded-none "
              : "rotate-0"
          } delay-500 duration-300  `}
        >
          <div
            className={` z-[2] flex flex-col justify-center items-center bg-custom-black rounded-3xl md:rounded-none ${
              disabledMenu ? "wrongClick" : ""
            }  `}
          >
            <HomeHeader handleClick={handleClick} />

            <div className="flex flex-col justify-center items-center w-full max-w-[70rem] ">
              {/* <div className=' max-w-[2.6rem] '>Hello i am your friend</div> */}
              <Outlet />
            </div>
          </div>
          {/* // Effects start // */}
          <CardEffect dispayMenu={dispayMenu} />
          {/* // Effects end // */}
        </div>
      </div>

      {/* // Scroll To Top Mechanics // */}
      {isScrolled && (
        <div
          className=" fixed bottom-0 right-[.5rem] mobile:right-[2rem] h-fit"
          onClick={handleScrollToTop}
        >
          <img
            className=" inset-1 scale-75 hover:scale-90 duration-300 "
            src={ARROWUP}
            alt="scroll up"
          />
        </div>
      )}
    </div>
  ) : (
    <Navigate
      to="/auth/login"
      replace={true}
      state={{ destination: location.pathname }}
    />
  );
}

export default Home;
