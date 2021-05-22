import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1 className="tracking-in-expand">
        Star<span>Wars</span>Flix
      </h1>
      <div className="icon-container">
        <i className="fab fa-medapps fa-2x header-icon"></i>
      </div>
    </div>
  );
}

export default Header;
