import GOOGLE from "./../assets/google.png";

import { Form } from "antd";
import { Link, Outlet } from "react-router-dom";
import * as Hooks from "../hooks";
import { Primary } from "../components/Buttons";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import Translator from "../components/ui/Translator";
import useHandleAuth from "../services/useHandleAuth";
import useGoogleServices from "../services/useGoogleServices";

function Auth() {
  const { t } = useTranslation();
  const [currentPage] = Hooks.useGetCurrentPage();
  const [pageContent, setPageContent] = useState({});

  const handleAuthAction = useHandleAuth();
  const handleGoogleSignin = useGoogleServices();

  const handleSubmit = (value) => {
    if (currentPage === "login") {
      handleAuthAction("login", value);
    } else if (currentPage === "signup") {
      handleAuthAction("signup", value);
    }
  };

  useEffect(() => {
    function pageContentDecider() {
      return currentPage === "login"
        ? {
            text: t("DONT_HAVE_AN_ACCOUNT"),
            actionText: "sign up",
            link: "auth/signup",
            button: t("LOGIN"),
            subHeader: t("PLEASE_LOGIN_TO_YOUR_ACCOUNT"),
          }
        : {
            text: t("ALREADY_HAVE_AN_ACCOUNT"),
            actionText: "login",
            link: "auth/login",
            button: t("SIGNUP"),
            subHeader: t("PLEASE_SIGNIN_TO_YOUR_ACCOUNT"),
          };
    }
    setPageContent(pageContentDecider());
  }, [currentPage, t]);

  return (
    <div className="relative flex flex-col justify-center items-center generalPadding  duration-200">
      <Translator />
      <div className=" flex flex-col gap-[5rem] sm:gap-[3.5rem] text-center pb-[5rem] pt-[5rem] sm:pt-[2rem] w-[100%] max-w-[70rem] ">
        <div className="w-full">
          <h1 className=" text-[5.2rem] ">MIRA</h1>
          <p className=" text-[1.4rem]">{`${pageContent?.subHeader}`}</p>
        </div>
        <div className=" flex flex-col justify-center items-center gap-[3rem] sm:gap-[2.5rem] w-full ">
          <figure className=" flex justify-center items-center bg-charcoal-gray w-[8rem] h-[7rem] rounded-2xl ">
            <img
              src={GOOGLE}
              onClick={(e) => handleGoogleSignin(e)}
              className=" object-contain h-[2.1rem]"
              alt={"google"}
            />
          </figure>

          <div className=" relative flex flex-col justify-center items-center h-[4rem] w-full">
            <hr className=" bg-light-gray w-[70%] " />
            <span className=" absolute rounded-full p-[1rem] bg-custom-black z-[99]">
              {t("OR")}
            </span>
          </div>
        </div>
        <Form
          className=" flex flex-col gap-[1rem] w-full "
          onFinish={(value) => handleSubmit(value)}
        >
          <Outlet />
          <Primary type="submit">{pageContent?.button}</Primary>
        </Form>

        <p>
          {pageContent?.text} &nbsp;
          <Link to={pageContent.link}>
            <span className=" text-custom-red ">{pageContent?.actionText}</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Auth;
