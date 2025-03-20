import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCxcJPzA_M9gH6PvkbOyEHXSGmPCG7GiZM",
  authDomain: "uber-clone-a66fe.firebaseapp.com",
  projectId: "uber-clone-a66fe",
  storageBucket: "uber-clone-a66fe.appspot.com",
  messagingSenderId: "25663664732",
  appId: "1:25663664732:web:499fb47e45009a06fd6c99",
  measurementId: "G-QJMPNW8HKR"
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth()

export { app, googleProvider, auth }