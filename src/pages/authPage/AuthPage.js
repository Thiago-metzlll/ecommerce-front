import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'

/**
 * Página pública de Login
 * - Permite que o usuário insira email e senha
 * - Valida os campos e simula autenticação
 * - Redireciona o usuário após o login
 */
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError('');

      // Simulação de autenticação (substitua por API real)
      if (email === 'admin@example.com' && password === '123456') {
        alert('Login bem-sucedido!');
        navigate('/dashboard'); // Redireciona para a área interna
      } else {
        setError('Email ou senha incorretos.');
      }
    } catch (err) {
      console.error('Erro ao fazer login:', err);
      setError('Erro inesperado. Tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Entrar</h2>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button">
          Entrar
        </button>

        <p className="register-hint">
          Não tem conta?{' '}
          <span
            className="register-link"
            onClick={() => navigate('/register')}
          >
            Cadastre-se
          </span>
        </p>
      </form>
    </div>
  );
}
