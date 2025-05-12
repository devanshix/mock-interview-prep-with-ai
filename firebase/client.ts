// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from  'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKaF5SoANabzQNvfaFI5u0mBlP2YwnaYA",
    authDomain: "prepwise-7bacd.firebaseapp.com",
    projectId: "prepwise-7bacd",
    storageBucket: "prepwise-7bacd.firebasestorage.app",
    messagingSenderId: "877734993385",
    appId: "1:877734993385:web:1f4d9bca32b2bad31c7f78",
    measurementId: "G-PGLG0KY77Y"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);