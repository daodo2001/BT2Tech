import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA6j0alyF1lc-ofsWn6jDVDszDjRKwF6Ts",
    authDomain: "chatbox-39ac4.firebaseapp.com",
    // databaseURL:"https://trusty-wares-356017-default-rtdb.firebaseio.com",
    databaseURL:"https://chatbox-39ac4-default-rtdb.firebaseio.com/",
    projectId: "chatbox-39ac4",
    storageBucket: "chatbox-39ac4.appspot.com",
    messagingSenderId: "609905696571",
    appId: "1:609905696571:web:55b1bc11ebed74e7b2e11e",
    measurementId: "G-2WXBGZC01C"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, push, onValue };