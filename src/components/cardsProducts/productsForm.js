import React, { useState, useEffect } from 'react';

/**
 * Componente de formulário dentro de cada card
 * Pode ser usado para criar ou editar produto
 */
export default function ProductForm({ product, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    imageUrl: '', // novo campo
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        description: product.description || '',
        imageUrl: product.imageUrl || '', // preenche a URL da imagem se houver
      });
    } else {
      setFormData({ name: '', price: '', description: '', imageUrl: '' });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      price: parseFloat(formData.price),
    });
    setFormData({ name: '', price: '', description: '', imageUrl: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
    >
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        step="0.01"
        name="price"
        placeholder="Preço"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Descrição"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="URL da imagem"
        value={formData.imageUrl}
        onChange={handleChange}
      />
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button type="submit">Salvar</button>
        {onCancel && (
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
