import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SetCookie from '../hooks/setCookie';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    SetCookie(formData.username, formData.password);

    console.log('User registered successfully');
    };

  return (
    <div className="container text-light">
   <Link to="/" className="btn btn-secondary mt-3">
          Back to Home
        </Link>

      <h2>Signup</h2>
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
          Signup
        </button>
      </form>
    </div>
  );
};

export default  Signup ;