import React from 'react';
import './Sell.css'; 
import propertyImage from '../../assets/sell/property.png';

function Sell() {
  return (
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

      <div className="sell-right">
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
  );
}

export default Sell;