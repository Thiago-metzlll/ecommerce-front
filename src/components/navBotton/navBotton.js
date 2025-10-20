import { useNavigate } from "react-router-dom";

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
