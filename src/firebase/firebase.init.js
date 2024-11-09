// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD05khE0G_243xzZ6QxOHjLkymbLYHhVPE",
    authDomain: "dimple-firebase-54a90.firebaseapp.com",
    projectId: "dimple-firebase-54a90",
    storageBucket: "dimple-firebase-54a90.firebasestorage.app",
    messagingSenderId: "150395345712",
    appId: "1:150395345712:web:d07fcc12ac484341ecc6f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth