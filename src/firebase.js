import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcEhJTMJ2ndkzgeF11ZWtaNeNd2X3qOr4",
  authDomain: "outlook-clone-c368b.firebaseapp.com",
  projectId: "outlook-clone-c368b",
  storageBucket: "outlook-clone-c368b.appspot.com",
  messagingSenderId: "44072783129",
  appId: "1:44072783129:web:646fb032894ab974ddc988",
  measurementId: "G-PT8FBHM9JK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
