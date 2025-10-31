import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../apis/productsApi';
import { useNavigate } from 'react-router-dom';

/**
 * Página pública de exibição de produtos
 * - Mostra todos os produtos em formato de cards
 * - Cada card tem imagem, nome, preço e botões de ação
 */
export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleViewDetails = (id) => {
    // Redireciona para a página de detalhes do produto
    navigate(`/produtos/${id}`);
  };

  const handleBuy = (product) => {
    // Aqui você pode integrar com um carrinho ou checkout
    alert(`Produto "${product.name}" adicionado ao carrinho!`);
  };

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="card">
          {/* Exibe imagem, se existir */}
          {product.imageUrl && (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
          )}

          <h3>{product.name}</h3>
          <p className="price">R$ {product.price.toFixed(2)}</p>

          {product.description && (
            <p className="description">
              {product.description.length > 80
                ? product.description.slice(0, 80) + '...'
                : product.description}
            </p>
          )}

          <div className="actions">
            <button
              className="button-info"
              onClick={() => handleViewDetails(product.id)}
            >
              Ver mais informações
            </button>
            <button
              className="button-buy"
              onClick={() => handleBuy(product)}
            >
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
