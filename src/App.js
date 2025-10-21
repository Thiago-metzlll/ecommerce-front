import React from 'react';
import ProductList from './components/cardsProducts/listaProducts';
import './App.css'; // Importa o CSS
// import Header from './components/structure/header/Header';
// // import Main from './components/structure/main_/Main'
// import Footer from './components/structure/footer/Footer'

function App() {
  return (
    <div>
      {/* <Header/> */}
      <ProductList />
      {/* <Footer/> */}
    </div>
  );
}

export default App;