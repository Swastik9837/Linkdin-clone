import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAMXoTabMn3c-LbaR0kZIW69v7NjM0hy8",
  authDomain: "lindkin-clone.firebaseapp.com",
  projectId: "lindkin-clone",
  storageBucket: "lindkin-clone.appspot.com",
  messagingSenderId: "1012829644182",
  appId: "1:1012829644182:web:f5bb8de967d27a12cb69b7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // inside of db we have access to our variables
const auth = firebase.auth(); // here we get authentication

export { db, auth };
