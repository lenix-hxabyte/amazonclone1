import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDep9L_NhWU-0dqPX8vHYqCsqhJiYbW1c0",
  authDomain: "clone-a1d70.firebaseapp.com",
  projectId: "clone-a1d70",
  storageBucket: "clone-a1d70.appspot.com",
  messagingSenderId: "519058940294",
  appId: "1:519058940294:web:fe361880932e37c6a78c07",
  measurementId: "G-GMLKN9N1F8"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
