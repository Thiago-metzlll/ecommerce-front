import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem('token'); // ou contexto, Redux, etc.

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
