// src/components/Register.js
import React, { useState } from 'react';
import classNames from 'classnames';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement registration logic here
    // For now, let's just log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const containerClass = classNames('register-container', 'max-w-md', 'mx-auto', 'p-8', 'border', 'rounded', 'shadow', 'bg-white');

  return (
    <div className={containerClass}>
      <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
      <form>
        <label className="block mb-2 font-bold">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
        />

        <label className="block mb-2 font-bold">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
        />

        <label className="block mb-2 font-bold">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
        />

        <button
          type="button"
          onClick={handleRegister}
          className="w-full py-2 text-white bg-green-500 rounded cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
