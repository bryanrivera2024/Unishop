import React from 'react';
import { Link } from 'react-router-dom'; 
import './About.css';

import imagen1 from './Joyeria.webp';
import imagen2 from './Ropa.jpg';
import imagen3 from './Interior.webp';

function About() {
  return (
    <div className="about-container">
     
      <header>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><Link to="/social-media">Social Media</Link></li>
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
      <div className="lower-section"></div> {/* Sección inferior con fondo café */}

      <div className="about-content">
  {/* Imagen a la izquierda */}
  <div className="about-image-container">
    <img src={imagen3} alt="Visión y Misión" className="about-image" />
  </div>

  {/* Texto a la derecha */}
  <div className="about-text-container">
    <h2>Visión</h2>
    <p>Nuestra visión es...</p> {/* Cambia por el texto de tu visión */}

    <h2>Misión</h2>
    <p>Nuestra misión es...</p> {/* Cambia por el texto de tu misión */}
  </div>
</div>


    </div>
  );
}


export default About;
