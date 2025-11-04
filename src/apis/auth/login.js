const API_URL = 'http://localhost:3000/auth';

export async function loginUser(email, password) {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Erro no login');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
