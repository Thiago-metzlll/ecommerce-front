import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../../pages/Home";
import PromoPage from '../../../pages/PromoPage'

export default function Main() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Promoções" element={< PromoPage/>} />
      </Routes>
    </main>
  );
}
