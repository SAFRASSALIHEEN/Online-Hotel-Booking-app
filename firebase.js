// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSo7Tjmflm_paws0qJZIXUDfYgVG6PntA",
  authDomain: "booking-app-6a40c.firebaseapp.com",
  projectId: "booking-app-6a40c",
  storageBucket: "booking-app-6a40c.appspot.com",
  messagingSenderId: "812529904343",
  appId: "1:812529904343:web:52e543d8a10d71f51ede92",
  measurementId: "G-5QNC5RBXXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const analytics = getAnalytics(app);