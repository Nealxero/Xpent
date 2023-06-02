import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/signup.css";


export const SignUp = () => { 

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
      // Perform signup logic or API call here
      console.log('Email:', email);
      console.log('Password:', password);
      // Reset form
      setEmail('');
      setPassword('');
    };

  
  
    return (
      <div className="signup-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
  
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
  
          <button type="submit">Sign up</button>
        </form>
        <p>Already have an account? <Link to="/LogIn">Log In</Link></p>
      </div>
    );
  };
  

   