// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAai_W7DFC4KiUjExdadY23JSl-NCxYVlM",
  authDomain: "intouch-9056d.firebaseapp.com",
  projectId: "intouch-9056d",
  storageBucket: "intouch-9056d.appspot.com",
  messagingSenderId: "685309681653",
  appId: "1:685309681653:web:2c6e5777e831edae90cabc",
};

// Initialize Firebase -> only initialize app once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

// share all 3 components to use in all directories
export { app, db, storage };
