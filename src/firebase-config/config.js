// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxv7vKccc6x2p8QofLVuYhm9Qe5dym3v8",
  authDomain: "mailiyafafarm.pages.dev",
  projectId: "farm-authenication",
  storageBucket: "farm-authenication.appspot.com",
  messagingSenderId: "415449646020",
  appId: "1:415449646020:web:a09dec370212102b341a91",
  measurementId: "G-6MZB7Y430Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
