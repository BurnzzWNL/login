import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase/firebase'; // Import Firebase functions
import './App.css'; // Importing the styles from App.css
import AuthForm from './components/AuthForm';

const App = () => {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className="app-wrapper">
      <div className="wrapper">
        <h1>Welcome to the Task Management App</h1>
        {!user ? (
          <div className="auth-container">
            <AuthForm onGoogleSignIn={handleGoogleSignIn} />
          </div>
        ) : (
          <div className="user-info">
            <h2>Welcome, {user.displayName}</h2>
            <p>You are signed in!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App; // Default export to avoid import issues
