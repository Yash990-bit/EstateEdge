import React from 'react'
import "./About.css";
import Aman from "../client/aman.png";
import Ankit from "../client/ankit.png";
import Neelanshu from "../client/neelanshu.png";

function About() {
  return (
    <>
      <div className="about-contain">
        <div className="hero-section">
          <h1 className="hero-title">Empowering <span>Real Estate</span> Transactions</h1>
          <p className="hero-house">Auction House is revolutionizing the way properties are bought, sold, and discovered.</p>
          <div className="hero-sold">
            <button className="primary">Explore Auctions</button>
            <button className="secondary">Sell Your Property</button>
          </div>
        </div> 

        <div className="mission">
          <h2 className="mission-title">Our Missions</h2>
          <p className="mission-text">
            To simplify, secure, and accelerate property transactions by connecting buyers, sellers,
            and investors on one transparent digital platform.
          </p>
        </div>
      </div> 

      <div className="our">
        <h1 className="our-title">Why Choose Us?</h1>
        <div className="our-cards">
          <div className="card">
            <div className="icon-circle">
              <div className="icon-box"></div>
            </div>
            <h2 className="card-title">Fast & Transparent Auctions</h2>
            <p className="card-text">Our streamlined bidding process ensures quick transactions with complete visibility at every step.</p>
          </div>

          <div className="card">
            <div className="icon-circle">
              <div className="icon-box"></div>
            </div>
            <h2 className="card-title">Zero Hidden Charges</h2>
            <p className="card-text">What you see is what you pay. We believe in honest pricing with no surprises.</p>
          </div>

          <div className="card">
            <div className="icon-circle">
              <div className="icon-box"></div>
            </div>
            <h2 className="card-title">24x7 Customer Support</h2>
            <p className="card-text">Our dedicated team is always available to assist you through every step of your property journey.</p>
          </div>

          <div className="card">
            <div className="icon-circle">
              <div className="icon-box"></div>
            </div>
            <h2 className="card-title">Verified Listings Only</h2>
            <p className="card-text">Every property on our platform undergoes a thorough verification process to ensure authenticity.</p>
          </div>
        </div>
      </div>

      <div className="client">
        <h1 className="client-title">What Our Clients Say</h1>
        <div className="client-cards">
          <div className="client-card">
          <img src={Aman} alt="Aman Soni" className="client-img" />
            <p className="client-text">"Auction House made my property selling experience seamless. Highly recommend!"</p>
            <h3 className="client-name">Aman Soni</h3>
            <p className="client-role">Home Seller</p>
          </div>

          <div className="client-card">
          <img src={Ankit} alt="Ankit Pandey" className="client-img" />
            <p className="client-text">"I found my dream home through Auction House. The process was quick and transparent."</p>
            <h3 className="client-name">Ankit Pandey</h3>
            <p className="client-role">Home Buyer</p>
          </div>

          <div className="client-card">
          <img src={Neelanshu} alt="Neelanshu Karn" className="client-img" />
            <p className="client-text">"As an investor, I appreciate the verified listings and the ease of bidding."</p>
            <h3 className="client-name">Neelanshu Karn</h3>
            <p className="client-role">Real Estate Investor</p>
          </div>
        </div>
      </div>

      <div className="blue-section">
        <h2 className="blue-title">Join thousands of happy buyers and sellers</h2>
        <p className="blue-text"> Whether you're looking to buy your dream property or sell at the best price.</p>
        <div className="blue-buttons">
        <button className="blue-button">Explore Auctions</button>
        <button className="blue-button">Sell Property</button>
      </div>
      </div>
    </>
  )
}

export default About;
