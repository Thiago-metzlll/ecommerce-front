import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../../pages/Home";
import SuppliersPage from "../../../pages/suppliersPage/SuppliersPage";
import ClientPage from "../../../pages/clientPage/ClientPage";
import AuthPage from "../../../pages/authPage/AuthPage";
import PrivateRoute from "../../PrivateRoute";
import RegisterPage from "../../../pages/registerPage/RegisterPage";

export default function Main() {
  return (
    <main className="main-content">
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/loginpage" element={<AuthPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rotas privadas */}
        <Route
          path="/fornecedores"
          element={
            <PrivateRoute>
              <SuppliersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ClientPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </main>
  );
}
