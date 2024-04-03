
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "dashboard-656fd.firebaseapp.com",
  projectId: "dashboard-656fd",
  storageBucket: "dashboard-656fd.appspot.com",
  messagingSenderId: "433733758925",
  appId: "1:433733758925:web:29bd4946394d306e005e84"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
