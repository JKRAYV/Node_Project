import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RemoveCookie from '../hooks/removeCookie';
import GetCookie from '../hooks/getCookie';

const Dashboard = () => {
  const navigate = useNavigate();
  const User = GetCookie('loggedInUser');
  const [transactions, setTransactions] = useState([]);

  const handleLogout = () => {
    sessionStorage.removeItem('username')
    navigate('/');
  };

  const username = sessionStorage.getItem('username');

  return (
    <div>
      <h1>Welcome to the Void {username}</h1>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleLogout}
      >
        Logout
      </button>
      
      <div>
        <h2>Coords</h2>
        <ul>
            {/* Display created Coordinate pages, or Coordinate pages last interacted with.*/}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
