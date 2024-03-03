// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-96608.firebaseapp.com",
  projectId: "mern-estate-96608",
  storageBucket: "mern-estate-96608.appspot.com",
  messagingSenderId: "981472555539",
  appId: "1:981472555539:web:ea2fbcf652ebf92d5a85e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);