import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const handleBar = () => {
    const navburger = document.querySelector('.navbar__phone');
    navburger.classList.toggle('navbar__phone--active');
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="../assets/components/react.png" alt="logo" />
      </div>
      <div className="navbar__links">
        <NavLink to="#" className="navbar__link navbar__link-active">
          Inicio
        </NavLink>
        <NavLink to="#" className="navbar__link">
          Operaciones
        </NavLink>
        <NavLink to="#" className="navbar__link">
          Ajustes
        </NavLink>
        <button className="navbar__button" onClick={handleBar}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className="navbar__phone">
        <NavLink to="#" className="navbar__bur navbar__link-active">
          Inicio
        </NavLink>
        <NavLink to="#" className="navbar__bur">
          Operaciones
        </NavLink>
        <NavLink to="#" className="navbar__bur">
          Ajustes
        </NavLink>
      </div>
    </nav>
  );
};
