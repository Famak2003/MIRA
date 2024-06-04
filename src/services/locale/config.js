import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import HttpApi from "i18next-http-backend";

// i18n
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ["en", "tr"],
//     fallbackLng: "en",
//     debug: true,
//     interpolation: {
//       escapeValue: false,
//     },
//     resources: {
//       en: require("./languages/en.json"),
//       tr: require("./languages/tr.json"),
//     },
//     ns: ["translations"],
//     defaultNS: "translations",
//     fallbackNS: "translations",
//   });

// i18n
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ["en", "tr"],
//     fallbackLng: "en",
//     debug: true,
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: {
//       loadPath: "/locales/{{lng}}.json",
//     },
//     react: {
//       useSuspense: true, // Enable react suspense
//     },
//   });

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    // debug: true,
    resources: {
      en: {
        translation: {
          LANDING_PAGE_HEADER: `The Future of Chat is Here With AI Technology`,
          LANDING_PAGE_BODY: `"The future of chat is here with AI technology" implies that the
          integration of AI into chat technology is already happening and that
          it's an exciting development for the way we communicate. AI-powered
          chatbots are becoming increasingly sophisticated and are able to
          understand and respond to natural language`,
          GET_STARTED: `Get started`,
          ENTER_PASSWORD: `Enter Your Password`,
          ENTER_MAIL: `Enter Your Mail`,
          ENTER_YOUR_NAME: `Enter Your Name`,
          PLEASE_LOGIN_TO_YOUR_ACCOUNT: `Please login To Your Account`,
          PLEASE_SIGNIN_TO_YOUR_ACCOUNT: `Please signin To Your Account`,
          DONT_HAVE_AN_ACCOUNT: `Don't have an account?`,
          ALREADY_HAVE_AN_ACCOUNT: `Already have an account?`,
          LOGIN: `login`,
          SIGNUP: `signup`,
          OR: `or`,
          CREATE_NEW_CHATS: `Create New Chats`,
          TODAY: `Today`,
          DAYS: `Days`,
          WRITE_YOUR_QUESTIONS: `write your question to ai chatbot here`,
          WELCOME: `Welcome to mira an AI study assistant for student. How can i help you
          today?`,
          LOGOUT: `Logout`,
          CHAT_HISTORY: `Chat History`,
          LANGUAGE: `language`,
          RECENTLY: `Recently`,
          LONG_TIME_AGO: `Long time ago`,
          CLEAR_HISTORY: `Clear history`,
        },
      },
      tr: {
        translation: {
          LANDING_PAGE_HEADER: `Sohbetin Geleceği AI Teknolojisi ile Burada`,
          LANDING_PAGE_BODY: `"AI teknolojisi ile sohbetin geleceği burada" ifadesi, yapay zekanın 
          sohbet teknolojisine entegrasyonunun zaten gerçekleştiğini ve iletişim şeklimiz için heyecan verici 
          bir gelişme olduğunu ima ediyor. AI destekli sohbet botları giderek 
          daha sofistike hale geliyor ve doğal dili anlayıp yanıt verebiliyor.`,
          GET_STARTED: `Başlamak`,
          ENTER_PASSWORD: `Şifrenizi girin`,
          ENTER_MAIL: `Postanızı Girin`,
          ENTER_YOUR_NAME: `Adınızı giriniz`,
          PLEASE_LOGIN_TO_YOUR_ACCOUNT: `Lütfen Hesabınıza giriş yapın`,
          PLEASE_SIGNIN_TO_YOUR_ACCOUNT: `Lütfen Hesabınızda oturum açın`,
          DONT_HAVE_AN_ACCOUNT: `Hesabınız yok?`,
          ALREADY_HAVE_AN_ACCOUNT: `Zaten hesabınız var mıbınız yok?`,
          LOGIN: `logiriş yapmakgin`,
          SIGNUP: `üye olmak`,
          OR: `veya`,
          CREATE_NEW_CHATS: `Yeni Sohbetler Oluştur`,
          TODAY: `Bugün`,
          DAYS: `günler`,
          WRITE_YOUR_QUESTIONS: `ai chatbot'a sorunuzu buraya yazın`,
          WELCOME: `Öğrenciye yönelik yapay zeka çalışma asistanı Mira'ya hoş geldiniz. Size nasıl yardım edebilirim
          Bugün?`,
          LOGOUT: `çıkış Yap`,
          CHAT_HISTORY: `Sohbet geçmişi`,
          LANGUAGE: `Dil`,
          RECENTLY: `son zamanlarda`,
          LONG_TIME_AGO: `Uzun zaman önce`,
          CLEAR_HISTORY: `geçmişi temizle`,
        },
      },
    },
  });

export default i18n;
