import { useRouteError, useNavigate } from "react-router-dom";
import * as Button from "./../Buttons";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);
  const errorMessage = error?.data?.includes("Error: No route matches")
    ? `wait hold on its on you not us === > ${error.data}`
    : error.data;

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className=" flex flex-col justify-between h-screen pt-[5rem] generalPadding">
      <div>
        <h1 className=" text-[3rem]">
          Error: sorry, seems something has busted, its on us homie not you 💀💀
        </h1>
        <br />
        <br />
        <br />
        <h2 className=" text-[2.5rem]">{errorMessage}</h2>
      </div>
      <Button.Primary handleClick={handleClick}>Go Back</Button.Primary>
    </div>
  );
}

export default Error;
