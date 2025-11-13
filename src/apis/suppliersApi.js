const BASE_URL = 'http://localhost:3000/fornecedores';

/**
 * GET ALL SUPPLIERS
 */
export async function fetchSuppliers() {
  try {
    const res = await fetch(BASE_URL, { credentials: 'include' });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Erro ao buscar fornecedores');
    return data;
  } catch (err) {
    console.error('Falha ao buscar fornecedores:', err);
    throw err;
  }
}

/**
 * CREATE SUPPLIER
 */
export async function createSupplier(supplier) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(supplier),
      credentials: 'include',
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Erro ao criar fornecedor');
    return data;
  } catch (err) {
    console.error('Falha ao criar fornecedor:', err);
    throw err;
  }
}

/**
 * UPDATE SUPPLIER
 */
export async function updateSupplier(id, supplier) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(supplier),
      credentials: 'include',
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Erro ao atualizar fornecedor');
    return data;
  } catch (err) {
    console.error('Falha ao atualizar fornecedor:', err);
    throw err;
  }
}

/**
 * DELETE SUPPLIER
 */
export async function deleteSupplier(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Erro ao deletar fornecedor');
    return data;
  } catch (err) {
    console.error('Falha ao deletar fornecedor:', err);
    throw err;
  }
}
