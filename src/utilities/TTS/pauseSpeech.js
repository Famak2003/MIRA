export const pauseSpeech = () => {
  if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
    window.speechSynthesis.pause();
    console.log("Speech has been paused");
  }
};
