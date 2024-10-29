// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFhEgHh-WIq7UaF8iUGW09v3HQOG4kVEg",
  authDomain: "food-order-online-6116e.firebaseapp.com",
  projectId: "food-order-online-6116e",
  storageBucket: "food-order-online-6116e.appspot.com",
  messagingSenderId: "157390383091",
  appId: "1:157390383091:web:c4b1d5ee3a3ea28bde9486",
  measurementId: "G-JX51DT2RH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);