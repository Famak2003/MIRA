import LANDING from "./../assets/landing image.png";
import { Primary } from "../components/Buttons";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div className=" h-[100svh] mobile:h-[100vh] flex flex-col justify-center items-center bg-transparent pb-[2%]  ">
      <figure className="h-[63%] w-full mb-[3rem] ">
        <img
          className=" h-full w-full object-cover "
          src={LANDING}
          alt="landing-page"
        />
      </figure>
      <div className=" flex flex-col gap-[2rem] justify-center h-[40%] items-center text-center generalPadding max-w-[80rem] ">
        <h1 className=" font-bold text-[2.4rem] ">
          The Future of Chat is Here With AI Technology
        </h1>
        <p className=" text-[1.1rem]">
          "The future of chat is here with AI technology" implies that the
          integration of AI into chat technology is already happening and that
          it's an exciting development for the way we communicate. AI-powered
          chatbots are becoming increasingly sophisticated and are able to
          understand and respond to natural language,
        </p>
        <div className=" w-full">
          <NavLink to={"/auth/login"}>
            <Primary>Get started</Primary>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
