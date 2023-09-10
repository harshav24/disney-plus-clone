import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7rejQ1DO1qUWJwBlBMi0GrsEULjO9z6s",
  authDomain: "disneycloneleojones.firebaseapp.com",
  projectId: "disneycloneleojones",
  storageBucket: "disneycloneleojones.appspot.com",
  messagingSenderId: "689164523648",
  appId: "1:689164523648:web:5c661ec94d9dbab8996e65",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { db, auth, provider, storage };
// export default db;
