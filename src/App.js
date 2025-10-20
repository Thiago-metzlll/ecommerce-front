import React from 'react';
import ProductList from './components/cardsProducts/listaProducts';
import './App.css'; // Importa o CSS
import Header from './components/structure/header/header';

function App() {
  return (
    <div>
      <Header/>
      <ProductList />
    </div>
  );
}

export default App;