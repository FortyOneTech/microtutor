// client/src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../utils/firebase';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MicroTutor
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        {currentUser ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <button onClick={handleSignOut} className="logout-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup" className="signup-button">
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
