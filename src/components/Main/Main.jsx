import React from 'react';
import './Main.css';
import Entity from './Entity';

function Main() {
  return (
    <div className="main-container">
      <Entity name="Pessoas" type="people" link="/peoples" icon="fa-user"></Entity>
      <Entity name="Filmes" type="movie" link="/movies" icon="fa-film"></Entity>
      <Entity name="Veículos" type="vehicle" link="/vehicles" icon="fa-car"></Entity>
    </div>
  );
}

export default Main;
