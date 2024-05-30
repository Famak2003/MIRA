import MESSAGE from "./../../assets/message.png";
import TRASH from "./../../assets/delete.png";

function ChatHistoryElement({ keyword, addDelete = false, addBg = false }) {
  return (
    <li
      className={` flex justify-between gap-[1rem] items-center h-[5rem] md:h-[4rem] w-full ${
        addBg && "bg-charcoal-gray"
      } rounded-2xl px-[1rem] py-[.7rem] `}
    >
      <div className=" flex gap-[2rem] justify-start items-center w-[90%] ">
        <img className=" max-h-[1.383rem] " src={MESSAGE} alt="conversation" />
        <p className=" text-[1.4rem] md:text-[1.29rem] truncate ">{keyword}</p>
      </div>
      {addDelete && <img className=" h-[1.8rem] " src={TRASH} alt="delete" />}
    </li>
  );
}

export default ChatHistoryElement;
