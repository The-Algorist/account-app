import React, { useState } from 'react';
import classNames from 'classnames';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleRegister = () => {
    // Simple input validation
    const validationErrors = validateInputs();

    if (Object.keys(validationErrors).length === 0) {
      // If validation passes, proceed with registration logic
      console.log('Registration successful!');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);

      // Clear form fields after successful registration
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
    } else {
      // If validation fails, update the errors state
      setErrors(validationErrors);
    }
  };

  const validateInputs = () => {
    let validationErrors = {};

    // Simple name validation
    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }

    // Simple email validation
    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }

    // Simple password validation
    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    return validationErrors;
  };

  const containerClass = classNames(
    'register-container',
    'max-w-md',
    'mx-auto',
    'p-8',
    'border',
    'rounded',
    'shadow',
    'bg-white'
  );

  return (
    <div className={containerClass}>
      <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={classNames('w-full px-4 py-2 border rounded', { 'border-red-500': errors.name })}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classNames('w-full px-4 py-2 border rounded', { 'border-red-500': errors.email })}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classNames('w-full px-4 py-2 border rounded', { 'border-red-500': errors.password })}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

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
