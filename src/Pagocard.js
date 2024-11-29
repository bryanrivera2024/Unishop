import React from 'react';
import { Link } from 'react-router-dom';
import './pago.css';
import metodos from './img/metodos.jpg'


function Pagocard() {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/social-media">Social Media</Link>
            </li>
          </ul>
        </nav>
        <div className="linea"></div>
      </header>

      <main className="container">
        <section className="form-section">
          <form>
            <div className="form-group">
              <label htmlFor="location">Ubicación*</label>
              <select id="location" required>
                <option value="">Seleccionar ubicación</option>
                <option value="location1">Ubicación 1</option>
                <option value="location2">Ubicación 2</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">Nombre*</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Apellido*</label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Apellido"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Número de Teléfono*</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="SV +503"
                  pattern="[0-9]{8}"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="state">Estado/Provincia*</label>
                <select id="state" required>
                  <option value="">Seleccionar</option>
                  <option value="state1">Estado 1</option>
                  <option value="state2">Estado 2</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="city">Ciudad*</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Ciudad"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="postal-code">Código Postal*</label>
              <input
                type="text"
                id="postal-code"
                placeholder="Código postal"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Dirección*</label>
              <input
                type="text"
                id="address"
                placeholder="Dirección"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="references">Referencias*</label>
              <input
                type="text"
                id="references"
                placeholder="Referencias"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="id-number">Número de identificación nacional*</label>
              <input
                type="text"
                id="id-number"
                placeholder="ID Nacional"
                required
              />
            </div>
            <button type="submit" className="btn">
              Guardar
            </button>
          </form>
        </section>

        <aside className="summary-section">
          <h2>Resumen del Pedido</h2>
          <p>Subtotal: $9.00</p>
          <button className="btn">Proceder a pagar</button>
          <h3>Métodos de pago</h3>
          <div className="payment-methods">
            <img src={metodos} alt="metodos" />
          </div>
        </aside>
      </main>
    </>
  );
}

export default Pagocard;
