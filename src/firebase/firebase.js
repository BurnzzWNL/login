// firebase/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAMTLvn_oWJ2bfs2RXMIwC-42FG7mRBPlM',
  authDomain: 'taskmanagement-8c069.firebaseapp.com',
  projectId: 'taskmanagement-8c069',
  storageBucket: 'taskmanagement-8c069.appspot.com',
  messagingSenderId: '95449553762',
  appId: '1:95449553762:web:6d27407c9d7d42009caa3b',
  measurementId: 'G-BT1D353E18',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth instance and Google Auth Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export the Firebase Auth instance and Google Auth Provider
export { auth, googleProvider };
