import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../../pages/Home";
import SuppliersPage from "../../../pages/suppliersPage/SuppliersPage";
import ClientPage from "../../../pages/clientPage/ClientPage"
import AuthPage from "../../../pages/authPage/AuthPage"

export default function Main() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fornecedores" element={<SuppliersPage/>} />
        <Route path="/products" element={<ClientPage/>}/>
        <Route path="/loginpage" element={<AuthPage/>}></Route>
      </Routes>
    </main>
  );
}
