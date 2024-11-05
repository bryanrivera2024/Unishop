import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link para la navegación
import './About.css';

import imagen1 from './imagen1.jpeg';
import imagen2 from './imagen2.jpeg';
import imagen3 from './imagen1.jpeg';

function About() {
  return (
    <div className="about-container">
      {/* Menú de navegación dentro de About.js */}
      <header>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#categories">Categories</a></li>
          </ul>
        </nav>
        <div className="linea"></div>
      </header>

      <div className="image-row">
        <img src={imagen1} alt="Imagen 1" className="about-image" />
        <img src={imagen2} alt="Imagen 2" className="about-image" />
        <img src={imagen3} alt="Imagen 3" className="about-image" />
      </div>
      <div className="info-box">
        <h2>About Us</h2>
        <p>
          Somos una empresa dedicada a ofrecer los mejores productos del mercado.
          Nuestra misión es brindar calidad, confianza y estilo en cada uno de nuestros productos.
        </p>
      </div>
    </div>
  );
}

export default About;
