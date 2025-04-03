import React from 'react';
import CardList from '../componentes/listacartas';
import CardForm from '../componentes/form_carta';
import './home.css';




function Home() {
  return (
    <>
      <h1 className="home-title">Cartas de Pokémon</h1>
      <div className="home-container">
        <div className="card-list">
          <CardList />
        </div>
        <div className="card-form">
          <CardForm />
        </div>
      </div>
    </>
  );
}

export default Home;
