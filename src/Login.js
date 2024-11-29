import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la redirección
import './Login.css'


export function Login() {

  return (
    <>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/social-media">Social Media</Link>
            </li>
            <li>
              <Link to="/Signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <div className="linea"></div>
      </header>


  <meta charSet="utf-8" />
  <title>Sign in</title>
  <link rel="stylesheet" href="/login-form-one/SignIn.css" />
  <div className="login-page">
    <div className="login-box">
      <h1>Sign in</h1>
      <p>or use your email account</p>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" />
        <input type="submit" defaultValue="Sign In" />
      </form>
    </div>
  </div>
</>

  );
};

export default Login;

