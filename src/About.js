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
        <h1>About Us</h1>
        <p>
          Somos una plataforma web diseñada como un marketplace donde nos especializamos en promocionar una amplia variedad de productos de diferentes categorías. Nuestro principal objetivo es ofrecer a nuestros usuarios una experiencia de compra fácil, intuitiva y segura. A través de nuestra aplicación, los usuarios pueden explorar un catálogo diverso de productos, desde ropa y calzado hasta electrodomésticos y otros artículos, todo desde la comodidad de su hogar.

          Nos enfocamos en brindar un proceso de compra eficiente, donde cada usuario puede seleccionar sus productos preferidos, añadirlos al carrito y realizar la compra de manera rápida y sencilla a través de nuestra plataforma. Además, contamos con opciones de búsqueda y filtros que permiten a los clientes encontrar lo que necesitan de forma ágil. Nos comprometemos a ofrecer una experiencia fluida y agradable para cada comprador, desde la selección del producto hasta la transacción final, asegurándonos de que cada paso sea tan cómodo como sea posible.

        </p>

        <Link to="/categories">
          <button className="shopping-now-button">Shopping Now</button>
        </Link>


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
