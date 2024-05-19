import React from "react";
import LOGO from "./../../assets/mira logo.png";

export default function Convo({ idx, obj }) {
  const TextWithLineBreaks = ({ text }) => {
    // Split the text by newline characters
    const textArray = text.split("\n");

    return (
      <p>
        {textArray.map((line, index) => (
          // Render each line with a <br /> tag after it, except the last one
          <React.Fragment key={index}>
            {line}
            {index < textArray.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    );
  };

  return (
    <li key={idx} className={` relative ${obj.author}`}>
      {/* // checks if to add logo to chat */}
      {obj.author !== "human" && (
        <img
          className=" hidden md:block absolute left-[-1rem] top-[2.5rem] h-[2rem] w-[2rem]"
          src={LOGO}
          alt="logo"
        />
      )}
      {obj.text && <TextWithLineBreaks text={obj?.text} />}
      {/* <p>{obj.text}</p> */}
    </li>
  );
}
