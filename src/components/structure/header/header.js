import NavButton from "../../navBotton/navBotton";
import './Header.css' 

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">🌐 Minha Aplicação</h1>

      <nav className="nav">
        <NavButton to="/">Home</NavButton>
        <NavButton to="/about">Sobre</NavButton>
        <NavButton to="/contact">Contato</NavButton>
      </nav>
    </header>
  );
}
