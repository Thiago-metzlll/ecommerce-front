const API_URL = 'http://localhost:3000/auth';

export async function loginUser(email, password) {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Erro no login');
    return data;
  } catch (error) {
    console.error('Login falhou:', error);
    throw error;
  }
}
