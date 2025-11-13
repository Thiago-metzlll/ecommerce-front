const BASE_URL = 'http://localhost:3000/products';

export async function fetchProducts() {
  const res = await fetch(BASE_URL, { credentials: 'include' });
  const data = await res.json();
  return data;
}

export async function createProduct(product) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
    credentials: 'include',
  });
  return res.json();
}

export async function updateProduct(id, product) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
    credentials: 'include',
  });
  return res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return res.json();
}
