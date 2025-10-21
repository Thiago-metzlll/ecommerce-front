import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 - Minha Aplicação</p>
      <p className="footer-links">
        <a href="/">Início</a> | <a href="/promocoes">Promoções</a>
      </p>
    </footer>
  );
}
