// src/pages/LoginPage.js
import React from 'react';
import AdminLogin from '../Components/AdminLogin';
import StudentLogin from '../Components/StudentLogin';

const LoginPage = () => {
  return (
    <div>
      <AdminLogin />
      <StudentLogin />
    </div>
  );
};

export default LoginPage;
