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
      
    </div>
    </>

  )
}

export default About;