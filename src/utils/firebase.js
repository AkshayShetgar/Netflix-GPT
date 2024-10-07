// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmMQ-MPo4g_v_-RZmbQ3iYsm_1K6J812Y",
  authDomain: "netflixgpt-97b1e.firebaseapp.com",
  projectId: "netflixgpt-97b1e",
  storageBucket: "netflixgpt-97b1e.appspot.com",
  messagingSenderId: "353248889432",
  appId: "1:353248889432:web:f5943d63946e66572c982d",
  measurementId: "G-V4R7JTCQPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();