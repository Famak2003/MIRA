import { TTS } from "./TTS";
import { stopSpeech } from "./stopSpeech";

const startSpeech = (text, currentSpeech) => {
  if (currentSpeech) {
    window.speechSynthesis.cancel(); // Cancel any ongoing speech
  }
  stopSpeech();
  currentSpeech = TTS(text);
};

export { startSpeech };
