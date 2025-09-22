import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ3q6k6srwQ_efnT5FDMfIgaEHThntm6A",
  authDomain: "safari-13efa.firebaseapp.com",
  projectId: "safari-13efa",
  storageBucket: "safari-13efa.firebasestorage.app",
  messagingSenderId: "317283975803",
  appId: "1:317283975803:web:743a0555e5ba0777df98de",
  measurementId: "G-DC6CXM03QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore()