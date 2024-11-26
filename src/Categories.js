import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import imagen1 from "./image.png"
import imagen2 from "./image (2).png"
import imagen3 from "./image (3).png"
import imagen4 from "./image (1).png"




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

            <>
                {/* Banner */}
                <div
                    id="bannerCarousel"
                    className="carousel slide carousel-banner"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://via.placeholder.com/1200x400"
                                className="d-block w-100"
                                alt="Banner Image"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="text-uppercase">Clothes</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Products Section */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="product-card">
                                <img src={imagen1} alt="Suéter casual" />
                                <h5>Suéter casual</h5>
                                <p>$5.00</p>
                                <button>add</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img src={imagen2} alt="Pantalón" />
                                <h5>Pantalón</h5>
                                <p>$5.00</p>
                                <button>add</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img src={imagen3} alt="Falda" />
                                <h5>Falda</h5>
                                <p>$5.00</p>
                                <button>add</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img src={imagen4} alt="Falda" />
                                <h5>Falda</h5>
                                <p>$5.00</p>
                                <button>add</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bootstrap JS */}
            </>
        </div>

    );
}

export default App;