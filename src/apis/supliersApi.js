// suppliersApi.js
const BASE_URL = 'http://localhost:3000/fornecedores'; // rota do NestJS

export async function fetchSuppliers() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function createSupplier(supplier) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(supplier),
  });
  return res.json();
}

export async function deleteSupplier(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}
