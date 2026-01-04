import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// This is the entry point for the React application.
// We wrap the main App component with the Router for client-side routing.
// In a production Facebook-like app, state management (e.g., Redux/Context) 
// would also wrap the App component here.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);