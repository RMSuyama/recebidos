import React, { useEffect, useState } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import firebase from '../config/firebase';

const PrivateRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
      setIsLoading(false);
    });
    return () => unregisterAuthObserver();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
