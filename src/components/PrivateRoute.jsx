// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    // Redireciona para login se não tiver token
    return <Navigate to="/loginpage" replace />;
  }

  return children;
}
