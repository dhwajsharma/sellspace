import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB-WQvU0x2XVs7QfvQbCHT_QwNZOJsw614",
    authDomain: "muj-marketplace.firebaseapp.com",
    projectId: "muj-marketplace",
    storageBucket: "muj-marketplace.appspot.com",
    messagingSenderId: "239636130393",
    appId: "1:239636130393:web:95758a25704f314fc2df48"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };