import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Ensure this path is correct
import './Login.css'; // Ensure this path is correct and comes after index.css

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response.data.message === 'Login successful') {
        const user = response.data.customer; 
        navigate('/home', { state: { user } });
      }
    } catch (error) {
      alert('Invalid credentials');
    }
  };
  
  const handleMicrosoftLogin = () => {
    // Implement Microsoft login logic here
    alert('Microsoft login clicked');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/assets/logo.png" alt="FINGRID Logo" className="login-logo" />
        <h2 className="login-title">Customer Portal</h2>
        <div className="login-field">
          <label htmlFor="username" className="login-label">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="login-field">
          <label htmlFor="password" className="login-label">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button onClick={handleLogin} className="login-button">Login</button>
        <button onClick={handleMicrosoftLogin} className="microsoft-login-button">
          <img src="/assets/microsoft-icon.png" alt="Microsoft Icon" className="microsoft-icon" />
          Login with Microsoft
        </button>
        <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;