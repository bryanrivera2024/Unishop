import React from 'react';
import { Link } from 'react-router-dom';
import './Social.css';
import imagen from "./Instagram-Icon.png"
import imagen2 from "./descarga (3).png"
import imagen3 from "./x logo.png"



function App() {
    return (
        <div className="app-container">
            {/* Menú de navegación */}
            <header>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><a href="#profile">Profile</a></li>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/social-media">Social Media</Link></li>
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

export default App