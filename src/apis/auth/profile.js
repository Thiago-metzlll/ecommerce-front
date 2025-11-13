const API_URL = 'http://localhost:3000/auth';

export async function getProfile() {
  try {
    const res = await fetch(`${API_URL}/profile`, {
      method: 'GET',
      credentials: 'include',
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Erro ao buscar perfil');
    return data;
  } catch (error) {
    console.error('Falha ao buscar perfil:', error);
    throw error;
  }
}
