// AuthForm.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import {googleProvider } from '../firebase/firebase'; 
import { auth } from '../firebase/firebase';

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegisterMode, setIsRegisterMode] = useState(false);
    const [user, setUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill out all fields!');
            return;
        }

        try {
            if (isRegisterMode) {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                alert('Registration successful!');
                console.log('Registered as:', userCredential.user.email);
                setIsRegisterMode(false);
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                alert('Login successful!');
                console.log('Logged in as:', userCredential.user.email);
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            console.log('Google Sign-In successful:', user);
            setUser(user); // Set the logged-in user
          })
          .catch((error) => {
            console.error('Google Sign-In Error:', error.code, error.message); // Added error code for debugging
          });
      };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#0a0a23',
            color: '#fff',
            fontFamily: 'Arial, sans-serif',
        }}>
            <div style={{
                backgroundColor: '#1b1b32',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 0 1rem rgba(0, 0, 0, 0.5)',
                width: '90%',
                maxWidth: '400px',
            }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                }}>{isRegisterMode ? 'Sign Up' : 'Sign In'}</h2>
                <form onSubmit={handleSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '0.5rem',
                    }}>
                        <i className="bx bx-envelope" style={{
                            marginRight: '0.5rem',
                            fontSize: '1.2rem',
                        }}></i>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            style={{
                                flex: '1',
                                border: 'none',
                                outline: 'none',
                                backgroundColor: 'transparent',
                                color: '#fff',
                                fontSize: '1rem',
                            }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '0.5rem',
                    }}>
                        <i className="bx bx-lock" style={{
                            marginRight: '0.5rem',
                            fontSize: '1.2rem',
                        }}></i>s
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            style={{
                                flex: '1',
                                border: 'none',
                                outline: 'none',
                                backgroundColor: 'transparent',
                                color: '#fff',
                                fontSize: '1rem',
                            }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <label style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <input type="checkbox" style={{
                                marginRight: '0.5rem',
                            }} /> Remember me
                        </label>
                        <a href="#" style={{
                            color: '#4CAF50',
                            textDecoration: 'none',
                        }}>Forgot Password?</a>
                    </div>
                    <button type="submit" style={{
                        backgroundColor: '#4CAF50',
                        color: '#fff',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        cursor: 'pointer',
                    }}>
                        {isRegisterMode ? 'Sign Up' : 'Sign In'}
                    </button>
                    <button onClick={handleGoogleSignIn} style={{
                        backgroundColor: '#4CAF50',
                        color: '#fff',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        cursor: 'pointer',
                    }}>Sign in with Google</button>
                </form>
            </div>
        </div>
    );
};

export default AuthForm;