import NavButton from "../../navBotton/NavBotton";
import './Header.css' 

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">🌐 Minha Aplicação</h1>

      <nav className="nav">
        <NavButton to="/">Home</NavButton>
        <NavButton to="">Promoções</NavButton>
      </nav>
    </header>
  );
}
