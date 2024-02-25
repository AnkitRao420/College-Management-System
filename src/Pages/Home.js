// src/pages/Home.js
import React from 'react';
import Logout from '../Components/Logout';
//import Home from './Pages/Home';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>This is the main page for authenticated users.</p>
      {/* Add user-specific information or links to other sections */}
      <Logout />
    </div>
  );
};

export default Home;
