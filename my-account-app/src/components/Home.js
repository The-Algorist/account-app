// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r p-4">
        <Link to="/account-profile" className="block p-2 bg-blue-500 text-white rounded mb-2">
          Account Profile
        </Link>
        <Link to="/settings" className="block p-2 bg-blue-500 text-white rounded mb-2">
          Settings
        </Link>
        <Link to="/transactions" className="block p-2 bg-blue-500 text-white rounded">
          Transactions
        </Link>
      </div>

      {/* Main Dashboard */}
      <div className="w-3/4 p-8">
        <h2 className="text-3xl font-bold mb-6">Welcome to the Account Opening App</h2>

        {/* Dashboard Sections */}
        <div className="dashboard-sections">
          {/* Account Overview */}
          <div className="dashboard-section">
            <h3 className="section-title">Account Overview</h3>
            <p className="section-description">
              View a summary of your account, including current balance, recent transactions, and account status.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-section">
            <h3 className="section-title">Quick Actions</h3>
            <ul className="section-list">
              <li>Make a transaction</li>
              <li>Update account information</li>
              <li>View transaction history</li>
            </ul>
          </div>

          {/* Notifications */}
          <div className="dashboard-section">
            <h3 className="section-title">Notifications</h3>
            <p className="section-description">
              Stay informed about account updates, transaction confirmations, and important announcements.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <Link to="/transactions" className="action-button">
            <button>View Transactions</button>
          </Link>
          <Link to="/account-settings" className="action-button">
            <button>Account Settings</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
