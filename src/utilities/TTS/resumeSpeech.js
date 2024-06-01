export const resumeSpeech = () => {
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    console.log("Speech has been resumed");
  }
};
