// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
    getDownloadURL,
    ref,
    uploadString,
    getStorage,
    uploadBytes,
} from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtI4kzi4HkD2De4IIXhPWhsfKYwmRsJ7A",
  authDomain: "lets-share-7a5be.firebaseapp.com",
  projectId: "lets-share-7a5be",
  storageBucket: "lets-share-7a5be.appspot.com",
  messagingSenderId: "929860059797",
  appId: "1:929860059797:web:87918e1a7e38ea094a519c",
  measurementId: "G-J7SM1Z6Q0W"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage };

const provider = new GoogleAuthProvider();
