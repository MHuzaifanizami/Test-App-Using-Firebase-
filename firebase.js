
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification, GoogleAuthProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber, } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyBTs1ARZtcrZ38yzFphzQA0TIFvvlLEr5Q",
  authDomain: "huzaifa-9289a.firebaseapp.com",
  projectId: "huzaifa-9289a",
  storageBucket: "huzaifa-9289a.appspot.com",
  messagingSenderId: "565186540599",
  appId: "1:565186540599:web:92183b57c6107e2306bbb2"
};









import { getFirestore, doc, setDoc, getDoc, collection, addDoc , updateDoc , onSnapshot , deleteDoc  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);


export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  GoogleAuthProvider,
  provider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  doc,
  setDoc,
  db,
  getDoc,
  collection,
  addDoc,
  updateDoc ,
  onSnapshot,
  deleteDoc
}

//////////////////////////////////////////////////////////////////