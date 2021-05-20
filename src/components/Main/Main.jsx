import React from "react";
import "./Main.css";

function Main() {
  return (
    <div>
      <div className="main-container">
        <div className="entity-container">
          <h2> Pessoas </h2>
          <i class="fas fa-user fa-3x"></i>
        </div>
        <div className="entity-container">
          <h2> Filmes </h2>
          <i class="fas fa-film fa-3x"></i>
        </div>
        <div className="entity-container">
          <h2> Veículos </h2>
          <i class="fas fa-car fa-3x"></i>
        </div>
      </div>
    </div>
  );
}

export default Main;
