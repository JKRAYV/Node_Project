import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GetCookie from '../hooks/getCookie';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const username = formData.username;
    const password = formData.password;

    const user = GetCookie(username);
  
    if (!user){
        alert("Invalid Username!")
    }
    else if (password !== user){
        alert("Invalid Password!")
    }
    else {
        alert("Login Successful!")
        window.location.href = '/dashboard';
        sessionStorage.setItem('username', username);
    }

  };



  return (
    <div className="container text-light">
      <Link to="/" className="btn btn-secondary mt-3">
        Back to Home
      </Link>
      <div className="container"></div>  
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            </div><br></br>
            <button type="submit" className="btn btn-primary">
            Login
            </button>
        </form>
    </div>
  );

};
export default Login;