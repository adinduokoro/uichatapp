// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkP2aWw3eZaFDEz7o3ozQDgG7acOL30NY",
  authDomain: "clubhouse-chat-app-26fb7.firebaseapp.com",
  projectId: "clubhouse-chat-app-26fb7",
  storageBucket: "clubhouse-chat-app-26fb7.appspot.com",
  messagingSenderId: "678667229278",
  appId: "1:678667229278:web:eae986f1fc4873e43b3ccf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()