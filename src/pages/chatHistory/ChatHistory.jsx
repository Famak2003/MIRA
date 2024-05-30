import "./chatHistory.scss";

import * as Button from "../../components/Buttons";
import ChatHistoryElement from "./../../components/ui/ChatHistoryElement";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" flex flex-col gap-[4rem] generalPadding pb-[5rem]">
      <div className=" flex flex-col gap-[2rem]">
        <p className=" text-[1.6rem]">New Chats</p>
        <Link to={"/home/chat"}>
          <Button.Primary>Create New Chats</Button.Primary>
        </Link>
      </div>
      <div className=" flex justify-between items-center">
        <p className=" text-[1.6rem]">Chats History</p>
        <small className=" text-[1.4rem]">See More</small>
      </div>
      <div className=" flexing-cols gap-[3rem]">
        <div className=" flexing-cols gap-[2rem]">
          <p>Today</p>
          <ul className=" flexing-cols gap-[1rem]">
            {Array.from({ length: 2 }, (_, i) => i).map((_, idx) => (
              <ChatHistoryElement
                addBg={true}
                key={idx}
                keyword={"Lorem ipsum dolor, sit amet consectetur"}
                addDelete={true}
              />
            ))}
          </ul>
        </div>
        <div className=" flexing-cols gap-[2rem]">
          <p>7 days</p>
          <ul className=" flexing-cols gap-[1rem]">
            {Array.from({ length: 5 }, (_, i) => i).map((_, idx) => (
              <ChatHistoryElement
                addBg={true}
                key={idx}
                keyword={"How far is the moon"}
                addDelete={true}
              />
            ))}
          </ul>
        </div>
        <div className=" flexing-cols gap-[2rem]">
          <p>30 days</p>
          <ul className=" flexing-cols gap-[1rem]">
            {Array.from({ length: 9 }, (_, i) => i).map((_, idx) => (
              <ChatHistoryElement
                addBg={true}
                key={idx}
                keyword={"Can a chicken give birth to a horse?? ...what!!"}
                addDelete={true}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
