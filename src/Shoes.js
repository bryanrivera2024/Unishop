import React from 'react';
import { Link } from 'react-router-dom';
import './Shoes.css';
import picture1 from "./image1.jpg"
import picture2 from "./image2.jpg"
import picture3 from "./image3.jpg"                                                                                                      
import picture4 from "./image4.jpg"
import shoes from "./Shoes.jpg"




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
                                src={shoes}
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
                                <img src={picture1} alt="Suéter casual" />
                                <h5>Converse</h5>
                                <p>$75.00</p>
                                <button>add</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img src={picture4} alt="Pantalón" />
                                <h5>Converse</h5>
                                <p>$75.00</p>
                                <button>add</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img src={picture2} alt="Falda" />
                                <h5>Converse</h5>
                                <p>$80.00</p>
                                <button>add</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img src={picture3} alt="Falda" />
                                <h5>Addidas</h5>
                                <p>$95.00</p>
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