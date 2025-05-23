import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import './Auction.css';

import apartment from '../../assets/bid/apartment.png';
import beach from '../../assets/bid/beach.png';
import commercial from '../../assets/bid/commercial.png';
import con from '../../assets/bid/con.png';
import farm from '../../assets/bid/farm.png';
import farmhouse from '../../assets/bid/farmhouse.png';
import flat from '../../assets/bid/flat.png';
import goa from '../../assets/bid/goa.png';
import london from '../../assets/bid/london.png';
import office from '../../assets/bid/office space.png';
import pent from '../../assets/bid/pent.png';
import penthouse from '../../assets/bid/penthouse.png';
import studio from '../../assets/bid/studio.png';
import ware from '../../assets/bid/ware.png';
import warehouse from '../../assets/bid/warehouse.png';
import condos from '../../assets/bid/condos.png';


const images = [
  apartment, beach, commercial, con, farm, farmhouse,
  flat, goa, london, office, pent, penthouse,
  studio, ware, warehouse,condos
];

const extendedData = data.map((item, i) => ({
  ...item,
  endTime: new Date(Date.now() + (5 + i) * 60 * 1000),
  image: images[i % images.length]
}));

function Auction() {
  const [auctions, setAuctions] = useState([]);
  const [theme, setTheme] = useState('light');
  const [bidHistory, setBidHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    setAuctions(extendedData);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAuctions(prev =>
        prev.map(item => {
          const timeLeft = Math.max(0, new Date(item.endTime) - new Date());
          return {
            ...item,
            countdown: formatTimeLeft(timeLeft)
          };
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handlePlaceBid = (item) => {
    const newBid = {
      id: Date.now(),
      item: item.item,
      amount: item.bid,
      time: new Date().toLocaleTimeString()
    };
    setBidHistory(prev => [newBid, ...prev]);
  };

  const handleDeleteBid = (id) => {
    setBidHistory(prev => prev.filter(bid => bid.id !== id));
  };

  const formatTimeLeft = (ms) => {
    if (ms <= 0) return 'Auction Ended';
    const totalSeconds = Math.floor(ms / 1000);
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="auction-container">
      <div className="auction-top-bar">
        <button onClick={() => window.location.href = '/'} className="back-btn">← Back to Home</button>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? "☀️ Light" : "🌙 Dark"}
        </button>
        <button className="history-toggle" onClick={() => setShowHistory(!showHistory)}>
           Bid History
        </button>
      </div>

      {showHistory && (
        <div className="bid-history-dropdown">
          <h2>Bid History</h2>
          <ul>
            {bidHistory.length === 0 && <li>No bids placed yet.</li>}
            {bidHistory.map((bid) => (
              <li key={bid.id}>
                {bid.item} – ₹{bid.amount} at {bid.time}
                <button className="delete-btn" onClick={() => handleDeleteBid(bid.id)}>❌</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <h1>Live <span>Auctions</span></h1>
      <div className="auction-grid">
        {auctions.map((item) => (
          <div key={item.id} className="auction-card">
            <img src={item.image} alt={item.item} />
            <h3>{item.item}</h3>
            <p>Bidder: {item.bidder}</p>
            <p>Current Bid: ₹{item.bid}</p>
            <p>Time Remaining: {item.countdown || 'Loading...'}</p>
            <button className="place-bid-btn" onClick={() => handlePlaceBid(item)}>Place Bid</button>
          </div>
        ))}
      </div>

      <footer className="auction-footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>© 2025 Auction House</p>
          </div>
          <div className="footer-center">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-right">
            <h1>Auction <span>House</span></h1>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Auction;
