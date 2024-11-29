// GoogleSignInButton.js
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';

const GoogleSignInButton = () => {
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            alert(`Welcome, ${user.displayName}!`);
            // Redirect or perform additional actions after Google sign-in
        } catch (error) {
            alert('Error signing in with Google: ' + error.message);
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
        }}>
            <button onClick={handleGoogleSignIn} style={{
                backgroundColor: '#4285F4',
                color: '#fff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
            }}>
                <i className="bx bxl-google" style={{
                    marginRight: '0.5rem',
                    fontSize: '1.2rem',
                }}></i>
                Sign in with Google
            </button>
        </div>
    );
};

export default GoogleSignInButton;