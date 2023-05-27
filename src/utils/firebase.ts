// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsLwCO_mW7BNh5MCpEOO-4zgq6BO9EqWE",
  authDomain: "netflix-clone-0801.firebaseapp.com",
  projectId: "netflix-clone-0801",
  storageBucket: "netflix-clone-0801.appspot.com",
  messagingSenderId: "918597162766",
  appId: "1:918597162766:web:78cf44f6db79167fb6a95f",
  measurementId: "G-Z03F38TKH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);