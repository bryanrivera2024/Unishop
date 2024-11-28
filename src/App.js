import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import imagen3 from "./Electrodomesticos.webp";
import imagen4 from "./Clothes.webp";
import imagen5 from "./Shoes.webp";
import About from './About';
import Social from './Social';
import Categories from './Categories';



function Home() {
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
            <img src={imagen3} alt="Producto 1" /> 
            <button className="product-button">Electrodomestics</button>
          </div>
          <div className="item">
            <img src={imagen4} alt="Producto 2" />
            <Link to="categories">
            <button className="product-button">Clothes</button>
            </Link>
          </div>
          <div className="item">
            <img src={imagen5} alt="Producto 3" />
            <button className="product-button">Shoes</button>
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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/social-media" element={<Social/>} />
        <Route path="/categories" element={<Categories/>} />
      </Routes>
    </Router>
  );
}



export default App;
