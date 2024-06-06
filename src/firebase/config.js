// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXZ27j6yWTarw-nFO53pVjLz7aIxsSu4I",
  authDomain: "olx-clone-d52c3.firebaseapp.com",
  projectId: "olx-clone-d52c3",
  storageBucket: "olx-clone-d52c3.appspot.com",
  messagingSenderId: "72404029028",
  appId: "1:72404029028:web:058ebdab7bc739115b5971",
  measurementId: "G-BC2ZV354RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage  };
