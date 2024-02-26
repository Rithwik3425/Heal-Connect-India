// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmwWC6XPeTCA_eEyhgBEE47HNZLPWMOF0",
  authDomain: "healconnectindia-40a91.firebaseapp.com",
  projectId: "healconnectindia-40a91",
  storageBucket: "healconnectindia-40a91.appspot.com",
  messagingSenderId: "385500311377",
  appId: "1:385500311377:web:53001af01cac6d8ccf6d70",
  measurementId: "G-BE5ZWNPYQX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
