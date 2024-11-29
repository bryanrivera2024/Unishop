import imagen3 from "./Electrodomesticos.webp";
import imagen4 from "./Clothes.webp";
import imagen5 from "./Shoes.webp";
import About from './About';
import Social from './Social';
import Categories from './Categories';
import Login from './Login'
import Pagocard from './Pagocard'
import { Link } from 'react-router-dom'; // Importa Link para la redirección

export function Home() {
  return (
    <div className="app-container">
      <header>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/social-media">Social Media</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/pagocard">Profile</Link></li>
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
            <img src={imagen3} alt="Producto Electrodomésticos" />
            <button className="product-button">Electrodomestics</button>
          </div>
          <div className="item">
            <img src={imagen4} alt="Producto Ropa" />
            <button className="product-button">Clothes</button>
          </div>
          <div className="item">
            <img src={imagen5} alt="Producto Zapatos" />
            <button className="product-button">Shoes</button>
          </div>
        </div>
      </section>
    </div>
  );
}
