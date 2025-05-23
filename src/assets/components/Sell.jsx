import React,{useState} from 'react';
import './Sell.css'; 
import propertyImage from '../../assets/sell/property.png';
import docs from '../../assets/sell/docs.png';
import house from '../../assets/sell/house.png';
import pos from '../../assets/sell/pos.png';
import admir from '../../assets/sell/admir.png';
import { Link } from 'react-router-dom';

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
    {
      id: 3,
      user: 'Rahul',
      post: 'posted a Residential Plot in Sector 45 Gurgaon',
      time: 'Yesterday',
    },
    {
      id:4,
      user:'Ravi',
      post:'posted a Residential Apartment 1200 sq.ft in Sector 50 Gurgaon, Gurgaon',
      time:'2 days ago',
    },
    {
      id: 5,
      user: 'Priya',
      post: 'posted a Residential Apartment 1500 sq.ft in Sector 55 Gurgaon, Gurgaon',
      time: '3 days ago',
    },
    {
      id: 6,
      user: 'Suresh',
      post: 'posted a Residential Apartment 2000 sq.ft in Sector 78 Gurgaon, Gurgaon',
      time: '4 days ago',
    },
  ];

  const faqData=[
    {
      question: "What type of property can I post on AuctionHouse.com for selling/renting?",
      answer: "As an owner, agent, or builder, you can post all types of residential and commercial properties for rent, lease, or sale. AuctionHouse.com is the best property portal to sell or rent your property fast!",
    },
    {
      question: "Is posting property for selling/renting on AuctionHouse.com FREE?",
      answer: "Yes, you can post your property online for free. There are no charges involved. All buyer/tenant enquiries will be shared with you completely free of cost.",
    },
    {
      question: "Can I sell/rent out my property on my own without paying brokerage?",
      answer: "Yes, as a property owner, you can sell or rent your property online using our free service without involving any real estate agents.",
    },
    {
      question: "How can I rent/sell my property faster?",
       answer: "Make your property listings as detailed as possible to get more visibility and relevant buyers or tenants.For more information you can call +91 9999 999 999.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
              <p className="login-text">Are you a registered user? <Link to="/login">Login</Link></p>
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
      <h2 className="recently-properties">Recently <span>posted</span> properties</h2>
    <div className="posted-marquee">
    <div className="posted-track">
      {posts.map((item) => (
        <div key={item.id} className="posted-card">
          <img src={house} alt="Icon" className="posted-icon" />
          <div className="posted-info">
            <strong>{item.user}</strong> {item.post}
            <p className="posted-time">{item.time}</p>
          </div>
        </div>
      ))}
      {posts.map((item) => (
        <div key={`dup-${item.id}`} className="posted-card">
          <img src={house} alt="Icon" className="posted-icon"/>
          <div className="posted-info">
            <strong>{item.user}</strong> {item.post}
            <p className="posted-time">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  <div className="fast">
    <h4 className="fast-benefits">Additional Properties</h4>
    <h2 className="faster">
      Everything <span className="highlight-auction">Auction</span> <span className="highlight-house">House</span> does to sell or rent out your property faster...
    </h2>
    <p className="fast-free">
      Post free property ads on AuctionHouse.com, India’s No. 1 property portal, to find genuine buyers and tenants. If you are the owner of a house, flat, apartment, villa, or any other residential property, you can conveniently post your property for rent or sale on our digital platform.
      Also, find your ideal tenants and buyers quickly to lease or sell your land, office space, shop, showroom, or any other commercial real estate. Whether you are a property owner, builder, or broker, you can rent or sell property online on AuctionHouse.com with ease.
    </p> 
    <p className="fast-free">
      AuctionHouse.com is one of the most trustworthy portals buyers and tenants use online for flats, independent houses, offices, shops, showrooms, warehouses, land, and factories.
      What makes AuctionHouse.com unique is our high-quality website traffic and reach to millions of households across India and abroad, who are looking to buy or rent residential or commercial properties.
    </p>
    <button className="begin-btn" onClick={scrollToForm}>Begin to Post your Property</button>
    </div>

    <div className="content-wrapper">
      <h4 className="more-fast">KNOW MORE ABOUT POSTING ON AUCTION HOUSE</h4>
      <h2 className="more-faster">Frequently Asked Questions</h2>
      <div className="faq-container">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggle(index)}>
                {item.question}
                <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    
  <footer className="feed">
    <div className="feed-content">
      <p>&copy; 2025 Auction House. All rights reserved.</p>
      <ul className="feed-links">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
      <p className="feed-note">Follow us on:
      <a href="https://github.com/Yash990-bit">Github</a> | <a href="https://www.instagram.com/whyash7/">Instagram</a> | <a href="https://www.linkedin.com/in/yash-raghubanshi-ba9ba630b">Linkdein</a>
      </p>
    </div>
  </footer>
  </>
  );
}

export default Sell;