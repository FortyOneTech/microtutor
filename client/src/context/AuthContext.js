// client/src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../utils/firebase';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const token = await user.getIdToken();
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setCurrentUser(user);
      } else {
        delete axios.defaults.headers.common['Authorization'];
        setCurrentUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [API_URL]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
