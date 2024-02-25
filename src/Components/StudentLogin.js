// src/components/StudentLogin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('Student login successful');
      // Add logic for handling successful login
    } catch (error) {
      console.error('Login error:', error.message);
      // Add logic for handling login error
    }
  };
  

  return (
    <div>
      <h2>Student Login</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
};

export default StudentLogin;
