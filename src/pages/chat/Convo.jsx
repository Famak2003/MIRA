import React, { useState } from "react";
import LOGO from "./../../assets/mira logo.png";
import MIC from "./../../assets/mic.png";
import PLAY from "./../../assets/play.png";
// import CANCEL from "./../../assets/icons8-cancel-50.png";
import PAUSE from "./../../assets/pause.png";
import STOP from "./../../assets/stop.png";
import TextWithLineBreaks from "../../components/ui/TextWithLineBreaks";
import { startSpeech } from "../../utilities/TTS/startSpeech";
import { pauseSpeech } from "../../utilities/TTS/pauseSpeech";
import { stopSpeech } from "../../utilities/TTS/stopSpeech";
import { useSelector } from "react-redux";
import { resumeSpeech } from "../../utilities/TTS/resumeSpeech";

export default function Convo({ idx, obj }) {
  const [showControls, setShowControls] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const currentSpeech = useSelector((state) => state.currentChat.currentSpeech);
  // const speechState = useSelector((state) => state.currentChat.speechState);

  // useEffect(() => {
  //   if (speechState) {
  //     setShowControls(false);
  //   }
  // }, []);

  const handleStartSpeech = (text) => {
    setShowControls(!showControls);
    startSpeech(text, currentSpeech);
  };

  const handlePauseSpeech = () => {
    setIsPaused(true);
    pauseSpeech();
  };

  const handlePlaySpeech = () => {
    setIsPaused(false);
    resumeSpeech();
  };

  const handleStopSpeech = () => {
    setShowControls(!showControls);
    stopSpeech();
  };

  // Usage
  // startSpeech("Hello, this is a text to speech test.");
  // You can now call pauseSpeech(), resumeSpeech(), and stopSpeech() to control the speech.

  return (
    <li key={idx} className={`flex flex-col gap-2 relative ${obj.author}`}>
      {/* // checks if to add logo to chat */}
      {obj.author !== "human" && (
        <img
          className=" hidden md:block absolute left-[-1rem] top-[2.5rem] h-[2rem] w-[2rem]"
          src={LOGO}
          alt="logo"
        />
      )}
      {obj.text && <TextWithLineBreaks text={obj?.text} />}
      {obj.author !== "human" && (
        <div className=" flex justify-end items-center overflow-hidden">
          <div
            className={` flex gap-3 self-end ${
              showControls ? "translate-x-0" : "translate-x-[70%]"
            } duration-300 rounded-xl blurrBG`}
          >
            <button
              disabled={showControls}
              className={` bg-custom-red rounded-xl filter ${
                showControls && "grayscale"
              } `}
            >
              <figure
                onClick={() => handleStartSpeech(obj.text, currentSpeech)}
                className=" flex justify-center items-center h-[2.5rem] w-[2.5rem] p-2 rounded-full bg-custom-black "
              >
                <img
                  className="max-h-[1.5rem] object-contain"
                  src={MIC}
                  alt="microphone"
                />
              </figure>
            </button>
            <button className=" bg-custom-red rounded-xl">
              <figure
                onClick={() =>
                  isPaused ? handlePlaySpeech() : handlePauseSpeech()
                }
                className=" flex justify-center items-center h-[2.5rem] w-[2.5rem] p-2 rounded-full bg-custom-black "
              >
                <img
                  className="max-h-[1.5rem] object-contain"
                  src={isPaused ? PLAY : PAUSE}
                  alt="microphone"
                />
              </figure>
            </button>
            <button className=" bg-custom-red rounded-xl">
              <figure
                onClick={() => handleStopSpeech()}
                className=" flex justify-center items-center h-[2.5rem] w-[2.5rem] p-2 rounded-full bg-custom-black "
              >
                <img
                  className="max-h-[1.5rem] object-contain"
                  src={STOP}
                  alt="microphone"
                />
              </figure>
            </button>
          </div>
        </div>
      )}

      {/* <p>{obj.text}</p> */}
    </li>
  );
}
