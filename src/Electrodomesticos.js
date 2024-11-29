import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

import Tostadora from "./tostadora.jpeg"
import Estufa from "./estufa.jpg"
import Lavadora from "./lavadora.jpg"                                                                                                      
import Refrigerador from "./refri.jpeg"
import Electrodomesticos from "./electro.jpg"




function App() {
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
                                src={Electrodomesticos}
                                className="d-block w-100"
                                alt="Banner Image"
                            />
                        </div>
                    </div>
                </div>
                {/* Products Section */}
                <div className="linea"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="product-card">
                                <img src={Tostadora} alt="Suéter casual" />
                                <h5>Tostadora</h5>
                                <p>$30.00</p>
                                <button>add</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img src={Estufa} alt="Pantalón" />
                                <h5>Estufa</h5>
                                <p>$115.00</p>
                                <button>add</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img src={Lavadora} alt="Falda" />
                                <h5>Lavadora</h5>
                                <p>$355.00</p>
                                <button>add</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img src={Refrigerador} alt="Falda" />
                                <h5>Refrigerador</h5>
                                <p>$700.00</p>
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
