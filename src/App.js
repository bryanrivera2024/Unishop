import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importamos lo necesario de react-router-dom
import './App.css';
import imagen1 from "./imagen1.jpeg";
import imagen2 from "./imagen2.jpeg";
import About from './About'; // Asegúrate de crear este archivo para la nueva página About

function Home() {
  return (
    <div className="app-container">
      <header>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li> {/* Usamos Link en lugar de <a href> */}
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#categories">Categories</a></li>
          </ul>
        </nav>
        <div className="linea"></div>
      </header>

      {/* Banner y contenido */}
      <section className="banner">
        <h1>Our New Collection</h1>
        <input type="text" placeholder="Search new collection..." className="search-bar" />
      </section>

      <section className="main-content">
        <div className="buttons-container">
          <button>New Collection</button>
          <button>Special Promo</button>
          <button>Casual Bag</button>
          <button>Party Bag</button>
        </div>

        <div className="images-container">
          <div className="item">
            <img src={imagen1} alt="Producto 1" />
            <p>Shoes</p>
          </div>
          <div className="item">
            <img src={imagen2} alt="Producto 2" />
            <p>Clothes</p>
          </div>
          <div className="item">
            <img src={imagen1} alt="Producto 3" />
            <p>Appliances</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página principal */}
        <Route path="/about" element={<About />} /> {/* Nueva página About */}
      </Routes>
    </Router>
  );
}

export default App;
