import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBJYMBOR2h1Pbyj61rH57OmCdJGgnk1y1I",
    authDomain: "dbanimalcrosing.firebaseapp.com",
    projectId: "dbanimalcrosing",
    storageBucket: "dbanimalcrosing.appspot.com",
    messagingSenderId: "133244711503",
    appId: "1:133244711503:web:f28b3524a298b57132703a",
    measurementId: "G-FX85L9KFSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);