// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { EmailAuthProvider, FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsmH28S3XR0FJYsOcGS7Z8AGld8wV_jW8",
    authDomain: "myproject-5e34a.firebaseapp.com",
    projectId: "myproject-5e34a",
    storageBucket: "myproject-5e34a.firebasestorage.app",
    messagingSenderId: "469139798012",
    appId: "1:469139798012:web:c6d8b543e73aae6cd1a479",
    measurementId: "G-0GP7D5P6R8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const email = new EmailAuthProvider();

// request email permission
google.addScope('email');
facebook.addScope('email');