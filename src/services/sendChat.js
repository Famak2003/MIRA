import axios from "axios";

export const sendChat = async (data) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: data.text }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    const gptResponse = response?.data?.choices[0]?.message?.content;
    const chat = {
      author: "bot",
      text: gptResponse,
    };
    return chat;
  } catch (err) {
    console.log(err?.response?.data?.error?.message);
    throw err;
  }
};
