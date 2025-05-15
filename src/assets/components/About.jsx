import React from 'react'
import "./About.css";

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
        <h2 className="card-title">Fast & Transparent Auctions</h2>
        <p className="card-text">Our streamlined bidding process ensures quick transactions with complete visibility at every step.</p>
      </div>
      <div className="card">
        <h2 className="card-title">Zero Hidden Charges</h2>
        <p className="card-text">What you see is what you pay. We believe in honest pricing with no surprises.</p>
      </div>
      <div className="card">
        <h2 className="card-title">24x7 Customer Support</h2>
        <p className="card-text">Our dedicated team is always available to assist you through every step of your property journey.</p>
      </div>
      <div className="card">
        <h2 className="card-title">Verified Listings Only</h2>
        <p className="card-text">Every property on our platform undergoes a thorough verification process to ensure authenticity.</p>
    </div>
  </div>
</div>

    </>

  )
}

export default About;