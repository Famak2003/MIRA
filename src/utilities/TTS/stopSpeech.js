export const stopSpeech = () => {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    console.log("Speech has been stopped");
  }
};
