const API_URL = 'http://localhost:3000/auth';

export async function registerUser(userData) {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
      credentials: 'include',
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Erro no registro');
    return data;
  } catch (error) {
    console.error('Registro falhou:', error);
    throw error;
  }
}
