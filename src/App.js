import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import About from './About';
import Social from './Social';
import Categories from './Categories';
import { Login } from './Login';
import Pagocard from './Pagocard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/social-media" element={<Social />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pagocard" element={<Pagocard />} />
        <Route path="/Iniciarsesion" element={<iniciarsesion />} />
      </Routes>
    </Router>
  );
}

export default App;
