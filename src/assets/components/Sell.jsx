import React from 'react';
import './Sell.css'; 
import propertyImage from '../../assets/sell/property.png';
import docs from '../../assets/sell/docs.png';
import house from '../../assets/sell/house.png';
import pos from '../../assets/sell/pos.png';

function Sell() {
  const scrollToForm = () => {
    document.getElementById('sell-form').scrollIntoView({ behavior: 'smooth' });
  };

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
    </>
  );
}

export default Sell;