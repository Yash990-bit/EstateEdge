import React from 'react';
import Navbar from './assets/components/Navbar';
import banner from './assets/images/banner.png';
import Auction from './assets/videos/Auction.mp4';
import book from './assets/images/book.png';
import globe from './assets/images/globe.png';
import cbre from './assets/images/cbre.png';
import lisney from './assets/images/lisney.png';
import knight from './assets/images/knight.png';
import savil from './assets/images/savil.png';
import sherry from './assets/images/sherry.png';
import bro from './assets/images/bro.png';
import brook from './assets/images/brook.png';
import cpg from './assets/images/cpg.png';
import Customer from './assets/Customer';
import './App.css';
import Footer from './assets/footer/footer';

function App() {
  return (
    <>
      <Navbar />

      <div className="banner-container">
        <img src={banner} alt="Auction Banner" className="banner-img" />
        <div className="banner-overlay">
          <h1 className="banner-heading">Your Trusted Partner <span>In Growth</span></h1>
          {/* <p className="banner-text">
          Discover your perfect property, build your real estate portfolio, and unlock the potential of your assets with EstateEdge.
          </p> */}
        </div>
      </div>

      <div className="off">
        <div className="off-video">
          <video controls muted>
            <source src={Auction} type="video/mp4" />
          </video>
        </div>
        <div className="off-text">
          <h2>Take a look at how we're transforming the <span>buying and selling</span> of property.</h2>
          <p>
            Auction House uses innovative technology that enables buyers to make private offers, bid in auctions,
            book viewings, upload proof of funds, download legal documents and even digitally sign contracts using
            Docusign… on any device anywhere.
          </p>
        </div>
      </div>

      <div className="become-section">
        <div className="become">
          <h2>Become <span>transactional</span></h2>
          <p>
            Transform your website into a transactional site in a matter of minutes with the Offr button fully
            customised to your brand colours. Buyers can then arrange viewings, place offers, bid in auctions and
            so much more.
          </p>
        </div>
        <div className="become-image">
          <img src={book} alt="Become transactional" />
        </div>
      </div>

      <div className="globe-section">
        <div className="global">
          <h2>Generate <span>global</span> interest</h2>
          <p>
            Allow vendors and purchasers to transact end to end, online, from anywhere in the world.
            Accessible 24/7, no need to wait for office hours to book a viewing, source a document or place an offer.
          </p>
        </div>
        <div className="globe-image">
          <img src={globe} alt="Globe" />
        </div>
      </div>

      <div className="head">
        <h2>Trust sellers of our <span>partners</span></h2>
      </div>

      <div className="Image-section">
        <img src={cbre} alt="CBRE" />
        <img src={lisney} alt="JLL" />
        <img src={knight} alt="Knight" />
        <img src={savil} alt="Savills" />
      </div>

      <div className="Img-section">
        <img src={sherry} alt="Sherry" />
        <img src={bro} alt="Bro" />
        <img src={brook} alt="Brook" />
        <img src={cpg} alt="CPG" />
      </div>

      <Customer/>
      <Footer/>
    </>
  );
}

export default App;
