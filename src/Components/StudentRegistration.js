// src/components/StudentRegistration.js
import React, { useState } from 'react';
import { auth } from '../firebase';

const StudentRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      // Create a new user with email and password
      await auth.createUserWithEmailAndPassword(email, password);
      console.log('Student registration successful');
      // Add logic for handling successful registration
    } catch (error) {
      console.error('Registration error:', error.message);
      // Add logic for handling registration error
    }
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default StudentRegistration;
