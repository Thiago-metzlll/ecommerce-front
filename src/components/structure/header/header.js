import NavButton from "../../navBotton/NavBotton";
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">🌐 Mini Ecommerce do Senac</h1>

      <nav className="nav">
        <NavButton to="/">Home</NavButton>
        <NavButton to="/fornecedores">Fornecedores</NavButton>
        <NavButton to="/products">Produtos</NavButton>
        <NavButton to='/loginpage'>Login</NavButton>
      </nav>
    </header>
  );
}
