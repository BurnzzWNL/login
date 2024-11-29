import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { googleProvider, auth } from '../firebase/firebase';
import './AuthForm.css';

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

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log('Google Sign-In successful:', user);
            setUser(user);
        } catch (error) {
            console.error('Google Sign-In Error:', error.code, error.message);
        }
    };

    return (
        <div className="auth-form-container">
            <h2 className="auth-form-heading">{isRegisterMode ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <div className="input-container">
                    <i className="bx bx-envelope input-icon"></i>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="auth-input"
                    />
                </div>
                <div className="input-container">
                    <i className="bx bx-lock input-icon"></i>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="auth-input"
                    />
                </div>
                <div className="auth-options">
                    <label className="remember-me">
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
                <button type="submit" className="auth-button">
                    {isRegisterMode ? 'Sign Up' : 'Sign In'}
                </button>
                <button type="button" onClick={handleGoogleSignIn} className="auth-button google-signin-button">
                    Sign in with Google
                </button>
            </form>
        </div>
    );
};

export default AuthForm;
