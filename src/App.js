import React from 'react';
import './App.css';
import imagen from "./Instagram-Icon.png"
import imagen2 from "./descarga (3).png"
import imagen3 from "./x logo.png"
import imagen4 from "./UNISHOP 1.0.png"



function App() {
  return (
    <div className="app-container">
      {/* Menú de navegación */}
      <header>
        <div className="logo">
          <img src={imagen4} alt="Unishop Logo" />
          <h1>UNISHOP</h1>
        </div>
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
      <div className="background-text"><h2>Join us in social media</h2></div>

      {/* contenido */}
      <main>
        <section className="social-media">
          <div className="icons">
            <div className="icon">
              <img src={imagen} alt="Instagram" />
              <p>@UNISHOPONECLICK</p>
            </div>
            <div className="icon">
              <img src={imagen3} alt="TikTok" />
              <p>@UNISHOPHUB</p>
            </div>
            <div className="icon">
              <img src={imagen2} alt="Facebook" />
              <p>@UNISHOPGLOBAL</p>
            </div>
          </div>
        </section>
      </main>

      {/*footer*/}
      <footer className="footer text-center bg-body-tertiary">
        <div className="footer-content text-center p-3">
          <p>
            © 2024 Copyright:
            <a href="#" className="footer-link">
              {"Unishop.com"}
            </a>
          </p>
        </div>
      </footer>
    </div>

  );
}

export default App;

