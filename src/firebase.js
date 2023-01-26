// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgilQAobXLsX4z4RPmiAMG_MUDkACYL7g",
  authDomain: "clubhouse-chat-9fae5.firebaseapp.com",
  projectId: "clubhouse-chat-9fae5",
  storageBucket: "clubhouse-chat-9fae5.appspot.com",
  messagingSenderId: "894257589734",
  appId: "1:894257589734:web:0935229f2f78e2f6727a27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();