// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Header = () => (
    <header className="header">
        <div className="header-content">
            <button className="logo">Alyssa Brewer</button>
            <nav className="nav">
                <Link className="nav-button" to="/">Home</Link>
                <Link className="nav-button" to="/about">About</Link>
                <Link className="nav-button" to="/contact">Contact</Link>
            </nav>
        </div>
    </header>
);

export default Header;