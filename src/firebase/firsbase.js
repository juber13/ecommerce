// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBMtHNgKbJ3a-rXEE9hdCEozsIUywqhcSE",
    authDomain: "ecommerce-a2317.firebaseapp.com",
    projectId: "ecommerce-a2317",
    storageBucket: "ecommerce-a2317.appspot.com",
    messagingSenderId: "801263271145",
    appId: "1:801263271145:web:0af2f56d050d2f2b72c478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);

export { auth, fireDb };