import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:3000/login`, { email, password })
      .then(response => {
        
        const { jwt: token, user } = response.data;
        if (token && user) {
          login(user, token); 
          navigate(from, { replace: true });
        } else {
          console.error('Login Response Issue:', response.data);
          alert('Login failed: Unexpected response from server.');
        }
      })
      .catch(error => {
        console.error('Login error:', error.response || error);
        alert('Login failed. Check credentials or console.');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Email: <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label></div>
        <div><label>Password: <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label></div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginForm;