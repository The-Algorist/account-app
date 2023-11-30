// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import a potential CSS file (create if needed)

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the Account Opening App</h2>
      <div className="home-buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/transactions">
          <button>Transactions</button>
        </Link>
        <Link to="/account-settings">
          <button>Account Settings</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
