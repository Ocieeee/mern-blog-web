// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAhjhK4a338W089yRD_IA5bpndyD3fYdSU",
  // apiKey: import.meta.env.API_KEY,
  authDomain: "mern-blog-e247e.firebaseapp.com",
  projectId: "mern-blog-e247e",
  storageBucket: "mern-blog-e247e.appspot.com",
  messagingSenderId: "1026223733766",
  appId: "1:1026223733766:web:b539c05909eee4c0215787"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

