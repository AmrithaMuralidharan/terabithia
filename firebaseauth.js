// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword}from   "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNtepbtj5usJPmuKWNC1NKNygntg3OFOw",
  authDomain: "login-form-b6b26.firebaseapp.com",
  projectId: "login-form-b6b26",
  storageBucket: "login-form-b6b26.appspot.com",
  messagingSenderId: "839889438360",
  appId: "1:839889438360:web:6c58a23ec96dff0f3a72ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);