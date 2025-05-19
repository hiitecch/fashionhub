// firebase/firebase.js (create this file)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzssDtI8ca5oSUuhEyOR6EceaW1-fHxl4",
  authDomain: "gp18-2362b.firebaseapp.com",
  projectId: "gp18-2362b",
  storageBucket: "gp18-2362b.firebasestorage.app",
  messagingSenderId: "40217973482",
  appId: "1:40217973482:web:f4697a629b06aab4607d93",
  measurementId: "G-1KGEJQJSDM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
