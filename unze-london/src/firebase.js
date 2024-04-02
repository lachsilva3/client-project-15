// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNKH1t_cN72NcKwmWQVWsontCYNLEhpeU",
    authDomain: "unze-london-4abcd.firebaseapp.com",
    projectId: "unze-london-4abcd",
    storageBucket: "unze-london-4abcd.appspot.com",
    messagingSenderId: "398421600326",
    appId: "1:398421600326:web:a3257589f8397d9d924247"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app);