// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-34f19.firebaseapp.com",
  projectId: "mern-blog-34f19",
  storageBucket: "mern-blog-34f19.appspot.com",
  messagingSenderId: "126495397503",
  appId: "1:126495397503:web:2996a4c4dadf8f9236114a",
  measurementId: "G-RGE5JQM0K1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);