import { getAuth } from  'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQkBgKmXTjZRpcxnvGdAHPWXEiC1apZrY",
  authDomain: "mobile3190-jv.firebaseapp.com",
  projectId: "mobile3190-jv",
  storageBucket: "mobile3190-jv.firebasestorage.app",
  messagingSenderId: "410276309863",
  appId: "1:410276309863:web:960f39d976095f738e9dc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
