// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "org-mk0BjA4s4LgQOlOhxMItyqEr",
  authDomain: "mira-8841b.firebaseapp.com",
  projectId: "mira-8841b",
  storageBucket: "mira-8841b.appspot.com",
  messagingSenderId: "924249993957",
  appId: "1:924249993957:web:9bc67d7086ba83d5229a0c",
  measurementId: "G-F2XQXFB1KC",
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
export const auth = getAuth(fireApp);
export default fireApp;
// const analytics = getAnalytics(app);
