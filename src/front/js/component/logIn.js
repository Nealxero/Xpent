import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/login.css";



export const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic or API call here
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form
    setEmail('');
    setPassword('');
  };

  return (
    <div className='login-form'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />

        <button type="submit">Login</button>
        <p>Dont have an account? <Link to="/SignUp">Sign up Here</Link></p>
      </form>
    </div>
  );
};

