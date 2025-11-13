import React, { createContext, useState, useEffect } from "react";
import { loginUser, logoutUser, getProfile } from "../apis/auth/index";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Inicializa usuário logado
  const fetchUser = async () => {
    try {
      const data = await getProfile();
      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const data = await loginUser(email, password);
      setUser(data.user);
    } catch (err) {
      throw err;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
