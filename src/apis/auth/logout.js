const API_URL = 'http://localhost:3000/auth';

export async function logoutUser() {
  try {
    const res = await fetch(`${API_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message || 'Erro no logout');
    return data;
  } catch (error) {
    console.error('Logout falhou:', error);
    throw error;
  }
}
