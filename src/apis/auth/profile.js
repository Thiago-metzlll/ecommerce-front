const API_URL = 'http://localhost:3000/auth';

export async function getProfile() {
  try {
    const res = await fetch(`${API_URL}/profile`, {
      method: 'GET',
      credentials: 'include',
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error('Erro do backend:', data);
      throw new Error(data.message || `Erro ${res.status}: ${res.statusText}`);
    }

    return data;
  } catch (error) {
    console.error('Falha ao buscar perfil:', error);
    throw error;
  }
}
