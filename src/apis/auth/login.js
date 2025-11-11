// authApi.js
const API_URL = 'http://localhost:3000/auth';

/**
 * LOGIN
 * Envia email e senha para o backend.
 * O backend cria cookie HttpOnly com o token.
 * Não precisamos mais armazenar token no frontend.
 */
export async function loginUser(email, password) {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include', // importante: envia cookies automaticamente
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Erro no login');
    }

    // Retorna apenas dados do usuário (token já está no cookie)
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

