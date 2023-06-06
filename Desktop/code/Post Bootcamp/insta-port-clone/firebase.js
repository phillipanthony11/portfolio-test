// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkQpR9VH7bE_oDyW91TLHoXxrnAS2-MXA",
  authDomain: "insta-port-clone.firebaseapp.com",
  projectId: "insta-port-clone",
  storageBucket: "insta-port-clone.appspot.com",
  messagingSenderId: "99498374028",
  appId: "1:99498374028:web:9ff9cd87799d4391d69ca9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) :
getApp();
const db= getFirestore();
const storage = getStorage();

export { app, db, storage };