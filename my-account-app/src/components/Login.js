import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Replaced useHistory with useNavigate
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic here
    // For now, let's simulate a simple login
    if (email === 'user@example.com' && password === 'password') {
      // Simulate successful login
      console.log('Login successful!');
      setError('');

      // Redirect to the home page or any desired route
      // Replaced push with navigate
      navigate('/');
    } else {
      // Simulate login error
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
}

export default Login;
