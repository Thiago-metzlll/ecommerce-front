import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // usar direto o context

export default function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    // enquanto verifica o usuário logado
    return <p>Carregando...</p>; // ou um spinner
  }

  return isAuthenticated ? children : <Navigate to="/loginpage" replace />;
}
