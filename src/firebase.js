// src/firebase.js
//import firebase from 'firebase/app';
//import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1xRFHghA6qw01dWjZXQo3SXdARzxRYTA",
    authDomain: "college-management-syste-1b4c4.firebaseapp.com",
    projectId: "college-management-syste-1b4c4",
    storageBucket: "college-management-syste-1b4c4.appspot.com",
    messagingSenderId: "1011245583261",
    appId: "1:1011245583261:web:8f75448a63c56abb58fd74"
};

// Initialize Firebases
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
