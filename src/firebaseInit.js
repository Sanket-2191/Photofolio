// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJegSo2Ymimk-5cp1lzcxLy",
    authDomain: "photofolio.firebaseapp.com",
    projectId: "photofolio",
    storageBucket: "photofolio.appspot.com",
    messagingSenderId: "10820",
    appId: "1:10820:web:d5480c228b4e6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// const db = firebase.firestore();