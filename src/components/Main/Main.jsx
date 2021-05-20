import React from "react";
import "./Main.css";
import Entity from "./Entity";

function Main() {
  return (
    <div className="main-container">
      <Entity name="Pessoas" type="people" link="#" icon="fa-user"></Entity>
      <Entity name="Filmes" type="movie" link="#" icon="fa-film"></Entity>
      <Entity name="Veículos" type="vehicle" link="#" icon="fa-car"></Entity>
    </div>
  );
}

export default Main;
