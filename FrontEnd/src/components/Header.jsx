import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from "./Header.module.css";

const Header = () => {
const { user, logout } = useContext(AuthContext);
const navigate = useNavigate();
const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
<nav className={styles.navbar}>
  <div className={styles.logo}>
    <img src="/assets/pieceofcakelogo.jpg" alt="Piece of Cake Bakery Logo" />
    <h1 className={styles.navTitle}>Welcome to Piece of Cake Bakery!</h1>
  </div>
  
  <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/customPage">Order Cake</Link>
            <Link to="/paymentPage">Payment</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/Auth">Login/Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
