import React from 'react'
import "./About.css";
import Aman from "../client/aman.png";
import Ankit from "../client/ankit.png";
import Neelanshu from "../client/neelanshu.png";
import Yash from "../client/yash.png";
import Shaurya from "../client/shaurya.png";
import Kavya from "../client/kavya.png";
import Chaitanya from "../client/chaitanya.png";


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

      <div className="journey">
        <h2 className="journey-title">Our Journey</h2>
        <div className="time">
          <div className="time-event">
            <div className="time-point"></div>
            <div className="time-content">
              <p className="time-year">2021</p>
              <p>Founded with a vision to bring real estate online.</p>
            </div>
          </div>

          <div className="time-event">
            <div className="time-point"></div>
            <div className="time-content">
              <p className="time-year">2022</p>
              <p>Crossed 10,000+ successful auctions.</p>
            </div>
          </div>

          <div className="time-event">
            <div className="time-point"></div>
            <div className="time-content">
              <p className="time-year">2023</p>
              <p>Launched mobile app for easier access.</p>
            </div>
          </div>

          <div className="time-event">
            <div className="time-point"></div>
            <div className="time-content">
              <p className="time-year">2024</p>
              <p>Expanded to international markets.</p>
            </div>
          </div>

          <div className="time-event">
            <div className="time-point"></div>
            <div className="time-content">
              <p className="time-year">2025</p>
              <p>Introduced AI-driven property recommendations.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="team">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src={Yash} alt="" className="team-img"/>
            <h3 className="team-name">Yash Raghubanshi</h3>
            <p className="team-role">CEO</p>
            <p className="team-quote">"Driven by innovation,committed to trust."</p>
          </div>
        
        <div className="team-card">
        <img src={Shaurya} alt="" className="team-img"/>
        <h3 className="team-name">Shaurya Sharma</h3>
        <p className="team-role">COO</p>
        <p className="team-quote">"Building bridges between technology and real estate."</p>
        </div>

        <div className="team-card">
        <img src={Kavya} alt="" className="team-img"/>
        <h3 className="team-name">Kavya Mukhija</h3>
        <p className="team-role">CTO</p>
        <p className="team-quote">"Passion for code that transforms lives."</p>
        </div>

        <div className="team-card">
        <img src={Chaitanya} alt="" className="team-img"/>
        <h3 className="team-name">Chaitanya Singh</h3>
        <p className="team-role">CFO</p>
        <p className="team-quote">"Ensuring financial integrity and growth."</p>
        </div>
        </div>
      </div>

    <footer className="footer">
      <div className="footer-role">
        <h4 className="footer-house">Auction House</h4>
        <p className="footer-real">Revolutionizing real estate transactions across India.</p>
        <div className="footer-social-icons">
          <span className="icon">⬜</span>
          <span className="icon">⬜</span>
          <span className="icon">⬜</span>
          <span className="icon">⬜</span>
        </div>
      </div>

      <div className="footer-life">
        <h4 className="footer-house">Quick Links</h4>
        <ul className="footer-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#auctions">Auctions</a></li>
          <li><a href="#sell">Sell Property</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-life">
        <h4 className="footer-house">Resources</h4>
        <ul className="footer-list">
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#terms">Terms & Conditions</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="footer-life">
        <h4 className="footer-house">Contact Us</h4>
        <p>123 Business Park, Mumbai, India</p>
        <p>+91 123 456 7890</p>
        <p>info@auctionhouse.com</p>
      </div>

      <div className="footer-copyright">
        <p>© 2025 Auction House. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default About;
