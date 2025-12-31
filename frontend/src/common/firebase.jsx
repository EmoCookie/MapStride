// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv-CfJrkaxXmckwJdH8vdJJKZcyatn578",
  authDomain: "mapstride-c93ba.firebaseapp.com",
  projectId: "mapstride-c93ba",
  storageBucket: "mapstride-c93ba.firebasestorage.app",
  messagingSenderId: "1094190359268",
  appId: "1:1094190359268:web:52c6a6cd6310d6a86f02f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Google auth
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err);
    })

    return user;
}