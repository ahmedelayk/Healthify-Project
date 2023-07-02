import "firebase/app";
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCNyL01xg-aQXYvFecmTS5BiKTZJi6Q0Sk",
  authDomain: "healthify-1f3a9.firebaseapp.com",
  projectId: "healthify-1f3a9",
  storageBucket: "healthify-1f3a9.appspot.com",
  messagingSenderId: "209398394645",
  appId: "1:209398394645:web:e303d8d2510a71624e431c",
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app);
const storage = getStorage(app);
const gProvider = new GoogleAuthProvider();
const fProvider = new FacebookAuthProvider();

export { auth, db, storage,gProvider,fProvider };
