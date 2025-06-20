import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import styles from './AuthPage.module.css';

const AuthPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const [error, setError] = useState('');
  const toggleMode = () => {
    setIsRegistering(!isRegistering);
    setError('');
  };

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isRegistering) {
        if (formData.password !== formData.password2) {
          return setError('Passwords do not match');
        }

        const res = await axios.post('https://final-project-cake-website.onrender.com/api/auth/register', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        login(res.data.user);
      } else {
        const res = await axios.post('https://final-project-cake-website.onrender.com/api/auth/login', {
          email: formData.email,
          password: formData.password,
        });
        login(res.data.user);
      }

      alert(`${isRegistering ? 'Registration' : 'Login'} successful`);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.errors?.[0]?.msg || 'Registration has failed');
    }
  };

  return (
    <div>
    <div className={styles.authContainer}>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={onSubmit}>
        {isRegistering && (
          <>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={onChange}
              required
            />
          </>
        )}

        <label>Email</label>
        <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={onChange}
        autoComplete="email"
        required
        />

        <label>Password</label>
        <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={onChange}
        autoComplete="current-password"
        required
        />

        {isRegistering && (
          <>
            <label>Confirm Password</label>
            <input
              type="password"
              name="password2"
              placeholder="Confirm password"
              value={formData.password2}
              onChange={onChange}
              required
            />
          </>
        )}

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>

      <p style={{ marginTop: '1rem' }}>
        {isRegistering ? "Already have an account?": null}
        <button type="button" onClick={toggleMode} style={{ marginLeft: '0.5rem' }}>
          {isRegistering ? 'Login' : 'Register'}
        </button>
      </p>
    </div>
    <footer>
      <p>&copy; 2025 Piece of Cake Bakery. All rights reserved.</p>
    </footer>
    </div>
  );
};
export default AuthPage;
