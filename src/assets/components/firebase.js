import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDuAplMDF5yCMsEGkY04bIa8NEogYQ1zjs",
  authDomain: "auction-house-ccf62.firebaseapp.com",
  projectId: "auction-house-ccf62",
  storageBucket: "auction-house-ccf62.appspot.com",
  messagingSenderId: "296018073339",
  appId: "1:296018073339:web:3ff13f303b3e45aefd425e",
  measurementId: "G-THN0TL1LN7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 