import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import imagen3 from "./Electrodomesticos.webp";
import imagen4 from "./Clothes.webp";
import imagen5 from "./Shoes.webp";
import About from './About';
import Social from './Social';
import Categories from './Categories';
import Shoes from './Shoes';

function Home() {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  const items = [
    { name: 'Electrodomestics', image: imagen3 },
    { name: 'Clothes', image: imagen4 },
    { name: 'Shoes', image: imagen5 },
  ];

  // Filtra los items según el término de búsqueda
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="app-container">
      <header>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#profile">Profile</a></li>
            <li><Link to="/social-media">Social Media</Link></li>
          </ul>
        </nav>
        <div className="linea"></div>
      </header>

      <section className="banner">
        <h1>Our New Collection</h1>
        <input
          type="text"
          placeholder="Search new collection..."
          className="search-bar"
          value={searchTerm}  // El valor del input es el término de búsqueda
          onChange={(e) => setSearchTerm(e.target.value)}  // Actualiza el término de búsqueda al escribir
        />
      </section>

      <section className="main-content">
        <div className="buttons-container">
          <button>New Collection</button>
          <button>Special Promo</button>
          <button>Casual Bag</button>
          <button>Party Bag</button>
        </div>

        <div className="images-container">

        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );    
}

export default App;
