import React from 'react';
import './Menu.css'; // Archivo CSS que agregaremos

const Menu = () => {
  return (
    <div>
      {/* Menú horizontal */}
      <nav className="menu">
        <ul>
          <li><a href="#quienes-somos">Quiénes Somos</a></li>
          <li><a href="#perfil">Perfil</a></li>
          <li><a href="#categorias">Categorías</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      {/* Línea debajo del menú */}
      <div className="linea"></div>
    </div>
  );
};

export default Menu;
