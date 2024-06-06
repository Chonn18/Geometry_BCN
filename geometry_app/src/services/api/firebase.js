// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPhj5bXvZsPTipxQ9TOog_d-1TBuv7W0M",
  authDomain: "bcn-geometry.firebaseapp.com",
  databaseURL: "https://bcn-geometry-default-rtdb.firebaseio.com",
  projectId: "bcn-geometry",
  storageBucket: "bcn-geometry.appspot.com",
  messagingSenderId: "1062126520617",
  appId: "1:1062126520617:web:92db7aef26e253b38b8f38",
  measurementId: "G-N4QEY0VMYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);