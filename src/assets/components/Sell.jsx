import React from 'react';
import './Sell.css'; 
import propertyImage from '../../assets/sell/property.png';
import docs from '../../assets/sell/docs.png';
import house from '../../assets/sell/house.png';
import pos from '../../assets/sell/pos.png';
import admir from '../../assets/sell/admir.png';

function Sell() {
  const scrollToForm = () => {
    document.getElementById('sell-form').scrollIntoView({ behavior: 'smooth' });
  };

  const posts = [
    {
      id: 1,
      user: 'Ankita',
      post: 'posted an Independent/Builder Floor 1455 sq.ft in Sector 82 Gurgaon, Gurgaon',
      time: 'Just now',
    },
    {
      id: 2,
      user: 'Anil Jindal',
      post: 'posted a Residential Apartment 1800 sq.ft in Sector 102 Gurgaon, Gurgaon',
      time: 'Today',
    },
    // Add more posts if needed
  ];

  return (
    <>
      <div className="sell-container">
        <div className="sell-left">
          <h2>
            Sell or Rent your Property<br/> 
            <span className="highlight-auction">online faster</span> with 
            <span className="highlight-house"> Auction House</span>.com
          </h2>
          <ul className="benefits-list">
            <li>✅ Advertise for FREE</li>
            <li>✅ Get unlimited enquiries</li>
            <li>✅ Get shortlisted buyers and tenants *</li>
            <li>✅ Assistance in coordinating site visits *</li>
          </ul>
          <img src={propertyImage} alt="Property" className="sell-image" />
          <p className="disclaimer">* Available with Owner Assist Plans</p>
        </div>

        <div className="sell-right" id="sell-form">
          <div className="sell-form">
            <h3>Start posting your property, it’s free</h3>
            <p className="form-subtext">Add Basic Details</p>
            <div className="options">
              <button className="option-btn">Sell</button>
              <button className="option-btn">Rent / Lease</button>
              <button className="option-btn">PG</button>
            </div>

            <div className="contact-form">
              <input type="text" placeholder="Phone Number" className="phone-input" />
              <button className="start-btn">Start now</button>
              <p className="login-text">Are you a registered user? <a href="#">Login</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="post">
        <h2 className="post-title">How to Post</h2>
        <h1 className="post-step">Post Your Property in 3 Simple Steps</h1>
        <div className="steps">
          <div className="step">
            {<img src={docs} alt="Step 1" className="step-icon" />}
            <h3 className="step-title">01. Add details of your property</h3>
            <p className="step-desc">Begin by telling us the basic details of your property like type, location, No. of rooms, etc.</p>
          </div>
          <div className="step">
            {<img src={pos} alt="Step 2" className="step-icon" />}
            <h3 className="step-title">02. Upload Photos & Videos</h3>
            <p className="step-desc">Upload photos and videos of your property from your device.</p>
          </div>
          <div className="step">
            { <img src={house} alt="Step 3" className="step-icon" />}
            <h3 className="step-title">03. Add Pricing & Ownership</h3>
            <p className="step-price">Just update your property's ownership details and your expected price.</p>
          </div>
        </div>
        <button className="begin-btn" onClick={scrollToForm}>Begin to Post your Property</button>
      </div>

      <div className="sell-image">
        <img src={admir} alt="Admir" className="admir-image" />
        <div className="stats-block">
      <h2>With over 7 million unique visitors monthly,your<br/> property gets maximum visibility <span className="highlight-auction">Auction</span> <span className="highlight-house">House.</span></h2>
      <div className="stats">
        <div className="stat">
          <p className="stat-over">OVER</p>
          <h3>1M</h3>
          <p>Property Listings</p>
        </div>
        <div className="stat">
          <p className="stat-over">OVER</p>
          <h3>5.5M</h3>
          <p>Monthly Searches</p>
        </div>
        <div className="stat">
          <p className="stat-over">OVER</p>
          <h3>200K</h3>
          <p>Owners advertising monthly</p>
        </div>
      </div>
      </div>
      </div>

      <div className="recently">
        <h2 className="recently-properties">Recently posted<br/> properties</h2>
        <div className="posted-list">
        {posts.map(item => (
          <div key={item.id} className="posted-card">
            <img src={house} alt="Icon" className="posted-icon" />
            <div className="posted-info">
              <strong>{item.user}</strong> {item.post}
              <p className="posted-time">{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      </div>
    </>
  );
}

export default Sell;