import toast from "react-hot-toast";

export const TTS = (text) => {
  if ("speechSynthesis" in window) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";

    speech.onstart = () => {
      console.log("Speech has started");
      // You can add any additional logic here to indicate the speech has started
    };

    speech.onend = () => {
      console.log("Speech has ended");
      // You can add any additional logic here to indicate the speech has ended
    };

    speech.onerror = (event) => {
      console.log("Speech error", event);
      // Handle speech errors here
    };

    window.speechSynthesis.speak(speech);

    return speech;
  }
  toast.error("Sorry, our speech module is not available in your browser😓");
  return null;
};
