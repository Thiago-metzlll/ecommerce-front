const API_URL = 'http://localhost:3000/auth';

export async function registerUser(userData) {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
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
