import React from 'react';
import './App.css';


<nav className="navbar bg-body-tertiary" style={{ height: '100vh', backgroundImage: "url('https://poemanalysis.com/wp-content/uploads/2022/10/Going-to-See-King-Lear-by-Jackie-Kay-Visual-Representation.jpg')" }}>
</nav>
function App() {
  return (
    <div className="app-container">
      {/* Menú de navegación */}
      <header>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
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
            <img src="/images/producto1.jpg" alt="Producto 1" />
            <p>Shoes</p>
          </div>
          <div className="item">
            <img src="" alt="Producto 2" />
            <p>Clothes</p>
          </div>
          <div className="item">
            <img src="/images/producto3.jpg" alt="Producto 3" />
            <p>Appliances</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

