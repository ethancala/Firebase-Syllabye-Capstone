// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";  // Import auth functions
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrJvJyPIZW-0LiAe7jGU9GCCtJ4T9RDFI",
  authDomain: "syllabye-d56d5.firebaseapp.com",
  projectId: "syllabye-d56d5",
  storageBucket: "syllabye-d56d5.firebasestorage.app",
  messagingSenderId: "901401987232",
  appId: "1:901401987232:web:660bf08368ab4b35a2e1c5"
};

// Initialize Firebas
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };