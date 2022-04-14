import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBL0Fu-18Ebgc0DRKJgm_zz8fFLJiXUXdU",
    authDomain: "instagram-clone-ed3d4.firebaseapp.com",
    projectId: "instagram-clone-ed3d4",
    storageBucket: "instagram-clone-ed3d4.appspot.com",
    messagingSenderId: "76020382091",
    appId: "1:76020382091:web:12c4eaf82d6d6a43e9578e",
    measurementId: "G-0QV0PGNLPS"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { db, auth, storage, functions };