// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhNG3iXSohCH7ZeRmNU56chMRg7PGpPpk",
  authDomain: "personalnote-b5f01.firebaseapp.com",
  projectId: "personalnote-b5f01",
  storageBucket: "personalnote-b5f01.appspot.com",
  messagingSenderId: "964710479769",
  appId: "1:964710479769:web:a23677fe52aaf43c7a8508",
  measurementId: "G-ZVPGMLTXMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, 'notes')
export { db, notesCollection };