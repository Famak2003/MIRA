import React from "react";

function TextWithLineBreaks({ text }) {
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
}

export default TextWithLineBreaks;
