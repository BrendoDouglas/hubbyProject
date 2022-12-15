// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from  "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTOnXEQzWTDXYv_0LkwFoELAmQwPgVeJI",
  authDomain: "hubby-9161d.firebaseapp.com",
  projectId: "hubby-9161d",
  storageBucket: "hubby-9161d.appspot.com",
  messagingSenderId: "47673300118",
  appId: "1:47673300118:web:7139c2b76243a086939eb7",
  measurementId: "G-SSWZVMV91Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);