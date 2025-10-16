import React, { useEffect, useState } from 'react';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../api';
import ProductForm from './productsForm';

/**
 * Componente que renderiza todos os produtos em cards
 * Cada card é editável
 * Há um card vazio para adicionar novo produto
 */
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleCreate = async (product) => {
    await createProduct(product);
    await loadProducts();
  };

  const handleUpdate = async (product) => {
    await updateProduct(editingId, product);
    setEditingId(null);
    await loadProducts();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Deseja realmente deletar este produto?')) {
      await deleteProduct(id);
      await loadProducts();
    }
  };

 return (
  <div className="products-grid">
    {/* Card para criar novo produto */}
    <div className="card">
      <h4>Novo Produto</h4>
      <ProductForm onSave={handleCreate} />
    </div>

    {products.map((product) => (
      <div key={product.id} className="card">
        {editingId === product.id ? (
          <ProductForm
            product={product}
            onSave={handleUpdate}
            onCancel={() => setEditingId(null)}
          />
        ) : (
          <>
            <h4>{product.name}</h4>
            <p>R$ {product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="edit" onClick={() => setEditingId(product.id)}>Editar</button>
              <button className="delete" onClick={() => handleDelete(product.id)}>Deletar</button>
            </div>
          </>
        )}
      </div>
    ))}
  </div>
);
}
