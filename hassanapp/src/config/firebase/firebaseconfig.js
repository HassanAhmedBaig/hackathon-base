// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANAEw1T7-3Ti0KKlvtfCudiCcS0kVZmQs",
  authDomain: "hackathon-base-74f18.firebaseapp.com",
  projectId: "hackathon-base-74f18",
  storageBucket: "hackathon-base-74f18.appspot.com",
  messagingSenderId: "15052666957",
  appId: "1:15052666957:web:09e950ed525373f56d4404",
  measurementId: "G-Y6Q6S46XNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
