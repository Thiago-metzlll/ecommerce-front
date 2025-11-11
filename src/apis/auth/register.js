/**
 * REGISTER
 * Cria usuário no backend.
 * Retorna dados do usuário criado (não inclui token).
 */
const API_URL = 'http://localhost:3000/auth';

export async function registerUser(userData) {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
      credentials: 'include', // mantém consistência caso backend configure cookies
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Erro no registro');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * LOGOUT
 * Remove cookie HttpOnly do backend.
 */
export async function logoutUser() {
  try {
    const res = await fetch(`${API_URL}/logout`, {
      method: 'POST',
      credentials: 'include', // envia cookie para backend poder apagar
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Erro no logout');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * GET PROFILE
 * Rota protegida. O cookie HttpOnly é enviado automaticamente.
 */
export async function getProfile() {
  try {
    const res = await fetch(`${API_URL}/profile`, {
      method: 'GET',
      credentials: 'include', // envia cookie
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Erro ao buscar perfil');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
