import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="world-footer">
  <div className="world-role">
    <h4 className="world-house">Auction House</h4>
    <p className="world-real">Revolutionizing real estate transactions across India.</p>
    <div className="world-social-icons">
      <span className="world-icon">⬜</span>
      <span className="world-icon">⬜</span>
      <span className="world-icon">⬜</span>
      <span className="world-icon">⬜</span>
    </div>
  </div>

  <div className="world-life">
    <h4 className="world-house">Quick Links</h4>
    <ul className="world-list">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#auctions">Auctions</a></li>
      <li><a href="#sell">Sell Property</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>

  <div className="world-life">
    <h4 className="world-house">Resources</h4>
    <ul className="world-list">
      <li><a href="#faqs">FAQs</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#terms">Terms & Conditions</a></li>
      <li><a href="#privacy">Privacy Policy</a></li>
    </ul>
  </div>

  <div className="world-life">
    <h4 className="world-house">Contact Us</h4>
    <p>123 Business Park, Mumbai, India</p>
    <p>+91 123 456 7890</p>
    <p>info@auctionhouse.com</p>
  </div>

  <div className="world-copyright">
    <p>© 2025 Auction House. All rights reserved.</p>
  </div>
</footer>

  );
};

export default Footer;
