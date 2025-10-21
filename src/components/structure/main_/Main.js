import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../../pages/Home";
import SuppliersPage from "../../../pages/suppliersPage/SuppliersPage";

export default function Main() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fornecedores" element={<SuppliersPage/>} />
      </Routes>
    </main>
  );
}
