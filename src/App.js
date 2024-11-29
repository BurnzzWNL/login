import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase/firebase'; // Import Firebase functions
import './App.css';  // Importing the styles from App.css
import AuthForm from './components/AuthForm';
const App = () => {
  const [user, setUser] = useState(null);

  

  return (
    <div>
      <h1>Welcome to the Task Management App</h1>
      {!user ? (
        <div>
          <AuthForm/>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <p>You are signed in!</p>
        </div>
      )}
    </div>
  );
};

export default App; // Default export to avoid import issues
