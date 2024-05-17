import React from 'react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <div className="logo">Motion Art Effect</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
