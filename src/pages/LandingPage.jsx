import LANDING from "./../assets/landing image new.png";
import LAB1 from "./../assets/near east lab pic1.jpg";
import LAB2 from "./../assets/near east lab pic2.jpg";

import { Primary } from "../components/Buttons";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Translator from "../components/ui/Translator";

function LandingPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className=" relative h-[100svh] mobile:h-[100vh] flex flex-col gap-4 justify-center items-center bg-transparent  ">
        <Translator />
        <a
          href="https://neu.edu.tr/?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="absolute top-5 right-5 flex flex-col gap-3 justify-center items-center h-fit">
            <img
              className="object-contain max-w-[14rem] rounded-lg"
              src={LAB1}
              alt="near east university lab"
            />
            <img
              className="object-contain max-w-[14rem] rounded-lg"
              src={LAB2}
              alt="near east university lab"
            />
          </figure>
        </a>

        <figure className="h-[63%] w-full ">
          <img
            className=" h-full w-full object-cover "
            src={LANDING}
            alt="landing-page"
          />
        </figure>
        <div className=" flex flex-col gap-[2rem] justify-center h-[35%] items-center text-center generalPadding max-w-[80rem] ">
          <h1 className=" font-bold text-[2.4rem] ">
            {t("LANDING_PAGE_HEADER")}
          </h1>
          <p className=" text-[1.1rem]">{t("LANDING_PAGE_BODY")}</p>

          <div className=" w-full">
            <NavLink to={"/auth/login"}>
              <Primary>{t("GET_STARTED")}</Primary>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
