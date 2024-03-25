// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqqtnkHSz5wz22rGxYTbHtngOPHQSwhJY",
  authDomain: "myrealestate254.firebaseapp.com",
  projectId: "myrealestate254",
  storageBucket: "myrealestate254.appspot.com",
  messagingSenderId: "193501799350",
  appId: "1:193501799350:web:98bedbb289f916dd33d717",
  measurementId: "G-SJ0LLBD09M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);