// api.js
// Centraliza todas as chamadas ao backend
const BASE_URL = 'http://localhost:3000/products';

export async function fetchProducts() {
  console.log('Fetching all products...');
  const res = await fetch(BASE_URL);
  const data = await res.json();
  console.log('Products fetched:', data);
  return data;
}

export async function createProduct(product) {
  console.log('Creating product:', product);
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  const data = await res.json();
  console.log('Product created:', data);
  return data;
}

export async function updateProduct(id, product) {
  console.log('Updating product id:', id, 'with', product);
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  const data = await res.json();
  console.log('Product updated:', data);
  return data;
}

export async function deleteProduct(id) {
  console.log('Deleting product id:', id);
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  console.log('Product deleted:', data);
  return data;
}
