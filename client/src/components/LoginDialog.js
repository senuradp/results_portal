import React, { useState } from 'react';
import './LoginDialog.css';

const LoginDialog = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Replace with your actual authentication logic
    if (username === 'swimming' && password === 'extravaganza') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-dialog">
      <div className="login-dialog-content">
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default LoginDialog;
