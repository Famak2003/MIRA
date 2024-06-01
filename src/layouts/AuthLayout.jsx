import { toast } from "react-hot-toast";

import GOOGLE from "./../assets/google.png";

import { useDispatch, useSelector } from "react-redux";

import { Form } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import * as Hooks from "../hooks";
import { Primary } from "../components/Buttons";
import { useEffect, useState } from "react";

import GoogleSignIn from "../fireFunctions/GoogleSignIn";
import Login from "../fireFunctions/Login";
import Signup from "../fireFunctions/Signup";
import { setIsLoading, setUserLogin } from "../redux/slices/authSlice";
import { useTranslation } from "react-i18next";
import Translator from "../components/ui/Translator";

function Auth() {
  const { t } = useTranslation();
  const location = useLocation();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [currentPage] = Hooks.useGetCurrentPage();
  const [pageContent, setPageContent] = useState({});
  const [error, setError] = useState("");
  // const isLoading = useSelector((state) => state.auth.isLoading);
  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    try {
      dispatch(setIsLoading(true));
      const response = await GoogleSignIn();
      dispatch(setIsLoading(false));
      console.log("response from google Signup", response);
      nav("/home/chat");
      dispatch(setUserLogin(true));
      toast.success("Login Successful");
    } catch (error) {
      dispatch(setIsLoading(false));
      toast.error("invalid login... try again in a few minutes");
      console.log(error.message);
    }
  };

  async function handleLogin(value, error, setError) {
    // const login = useSelector((state)=> state.auth.login)
    // console.log(value);
    setError("");
    try {
      dispatch(setIsLoading(true));
      const response = await Login(value.email, value.password);
      console.log("response from Login ===> ", response);
      dispatch(setIsLoading(false));
      const destination = location?.state?.destination
        ? location.state.destination
        : "/home/chat";
      nav(destination, { replace: true });
      dispatch(setUserLogin(true));
      toast.success("Login Successful");
    } catch (err) {
      dispatch(setIsLoading(false));
      toast.error("invalid login... check credentials");
      setError(err.message);
      console.error(error);
    }
  }

  async function handleSignUp(value, error, setError) {
    console.log(value);
    setError("");
    try {
      dispatch(setIsLoading(true));
      const response = await Signup(value.email, value.password);
      console.log("reponse from sign up ===> ", response);
      dispatch(setIsLoading(false));
      nav("/home/chat");
      dispatch(setUserLogin(true));
      toast.success("Sign up Successful");
    } catch (err) {
      dispatch(setIsLoading(false));
      toast.error("Sign up error... check credentials and try again");
      setError(err.message);
      console.error(error);
    }
  }

  const handleSubmit = (value) => {
    if (currentPage === "login") {
      handleLogin(value, error, setError);
    } else if (currentPage === "signup") {
      handleSignUp(value, error, setError);
    }
  };

  useEffect(() => {
    function pageContentDecider() {
      if (currentPage === "login") {
        return {
          text: t("DONT_HAVE_AN_ACCOUNT"),
          actionText: "sign up",
          link: "auth/signup",
          button: t("LOGIN"),
          subHeader: t("PLEASE_LOGIN_TO_YOUR_ACCOUNT"),
        };
      } else {
        return {
          text: t("ALREADY_HAVE_AN_ACCOUNT"),
          actionText: "login",
          link: "auth/login",
          button: t("SIGNUP"),
          subHeader: t("PLEASE_SIGNIN_TO_YOUR_ACCOUNT"),
        };
      }
    }
    setPageContent(pageContentDecider());
  }, [currentPage, t]);

  // useEffect(() => {
  //   if (isLoading) {
  //     toast.loading("loading");
  //   }
  // }, [isLoading]);

  return (
    <>
      <Translator />

      <div className=" flex flex-col justify-center items-center generalPadding  duration-200">
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
              <span className=" text-custom-red ">
                {pageContent?.actionText}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Auth;
