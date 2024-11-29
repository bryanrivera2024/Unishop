import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'


export function Signup() {

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
                            <Link to="/Login">Sign In</Link>
                        </li>
                    </ul>
                </nav>
                <div className="linea"></div>
            </header>

            <meta charSet="utf-8" />
            <title>Sign Up</title>
            <link rel="stylesheet" href="/Signup.css" />
            <div className="signup-page">
                <div className="login-box">
                    <h1>Create Account</h1>
                    <p>or use your email account</p>
                    <form>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Enter Username" />
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Enter Email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" />
                        <input type="submit" defaultValue="Sign Up" />
                    </form>
                </div>
            </div>
        </>

    );
};

export default Signup;

