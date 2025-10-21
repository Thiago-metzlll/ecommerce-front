import { useNavigate } from "react-router-dom";
// import "./NavButton.css";

export default function NavButton({ to, children }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(to);
  }

  return (
    <button className="nav-button" onClick={handleClick}>
      {children}
    </button>
  );
}
