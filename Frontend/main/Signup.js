// Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    const newUser = {
      username,
      email,
      password,
    };

    // Make a POST request to the backend
    axios.post('http://localhost:5000/signup', newUser)
      .then((response) => {
        console.log(response.data);
        // Handle successful signup
      })
      .catch((error) => {
        console.error(error);
        // Handle signup error
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
