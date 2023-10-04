import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDN9r-iw5SF3diE2MedeDe1_1prfpHKLU",
  authDomain: "sih-project2023.firebaseapp.com",
  projectId: "sih-project2023",
  storageBucket: "sih-project2023.appspot.com",
  messagingSenderId: "415171356335",
  appId: "1:415171356335:web:aee60b8ab1c539b293965a",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
