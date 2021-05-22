import React from 'react';
import './Entity.css';

function Entity(props) {
  return (
    <a href={props.link}>
      <div className="entity-container">
        <h2> {props.name} </h2>
        <i className={`fas ${props.icon} fa-3x`}></i>
      </div>
    </a>
  );
}

export default Entity;
