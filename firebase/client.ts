// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC20QbMXccqDYmKNQRT_yg2GfWjHtHul7g",
  authDomain: "prepwise-43f75.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "prepwise-43f75.firebasestorage.app",
  messagingSenderId: "781737548474",
  appId: "1:781737548474:web:6a21effb174ea079c44083",
  measurementId: "G-1WHYMMH4B2",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
