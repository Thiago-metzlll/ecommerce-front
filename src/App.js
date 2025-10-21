import React from 'react';
import './App.css'; // Importa o CSS
import Header from './components/structure/header/Header';
import Main from './components/structure/main_/Main'
import Footer from './components/structure/footer/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;