import React from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom';

const isAuthenticated = () => {
  return !!localStorage.getItem('user');
};
const PrivateRoute = ({ children }) => {
  const location = useLocation();

  if (isAuthenticated()) {
    return children;
  }
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>You must log in first to place an order.</h2>
      <p>
        Please <Link to="/Auth">log in</Link> or <Link to="/Auth">register</Link> to continue.
      </p>
    </div>
  );
};

export default PrivateRoute;
