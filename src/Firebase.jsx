// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaUByNYi3MosoKC-qP_ACm_6fOk4gvjoE",
  authDomain: "zuritask3.firebaseapp.com",
  projectId: "zuritask3",
  storageBucket: "zuritask3.appspot.com",
  messagingSenderId: "187774251504",
  appId: "1:187774251504:web:0ccba590017a1cffd6ad35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
