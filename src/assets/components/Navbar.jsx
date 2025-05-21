import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? "dark-theme" : "light-theme";
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">Auction <span>House</span></a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/auctions">Auctions</a>
          <a href="/sell">Sell Property</a>
          <a href="/contact">Contact</a>

          <div className="search-bar">
            <i className="fas fa-search"></i>
          </div>

          <div className="auth-buttons">
            <button className="login-btn" onClick={()=>navigate("/login")}>Login</button>
            <button className="signup-btn" onClick={()=>navigate("/signup")}>Sign Up</button>
          </div>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
