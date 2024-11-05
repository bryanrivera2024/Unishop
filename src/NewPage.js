import React from 'react';
import './NewPage.css'; // Si tienes estilos para esta página
import App from './App';

const NewPage = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>Bienvenido a nuestra tienda. Aquí explicamos sobre nuestra misión y visión...</p>
      <div className="image-grid">
        <img src="imagen1.jpg" alt="Imagen 1" className="grid-image" />
        <img src="imagen2.jpg" alt="Imagen 2" className="grid-image" />
        <img src="imagen1.jpg" alt="Imagen 3" className="grid-image" />
      </div>
      <div className="info-box">
        <p>Este es un cuadro informativo adicional.</p>
      </div>
    </div>
  );
};

export default App;
