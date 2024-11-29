import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM from 'react-dom/client' in React 18
import App from './App';  // Make sure this path is correct

// Create root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
