// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9u3U5KEMXDPJaRm0eroX1REOpEVyRWqE",
  authDomain: "fir-uthentication-7c565.firebaseapp.com",
  projectId: "fir-uthentication-7c565",
  storageBucket: "fir-uthentication-7c565.appspot.com",
  messagingSenderId: "274645104713",
  appId: "1:274645104713:web:b6f29324d7aacc686f6798"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
