import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import './Auction.css';

// Import images from src/assets/bid/
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

// Array of images for assignment
const images = [
  apartment, beach, commercial, con, farm, farmhouse,
  flat, goa, london, office, pent, penthouse,
  studio, ware, warehouse
];

// Extend data with images and endTime
const extendedData = data.map((item, i) => ({
  ...item,
  endTime: new Date(Date.now() + (5 + i) * 60 * 1000),
  image: images[i % images.length]
}));

function Auction() {
  const [auctions, setAuctions] = useState([]);

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
      <h1>Live Auctions</h1>
      <div className="auction-grid">
        {auctions.map((item) => (
          <div key={item.id} className="auction-card">
            <img src={item.image} alt={item.item} />
            <h3>{item.item}</h3>
            <p><strong>Bidder:</strong> {item.bidder}</p>
            <p><strong>Current Bid:</strong> {item.bid}</p>
            <p><strong>Time Remaining:</strong> {item.countdown || 'Loading...'}</p>
            <button className="place-bid-btn">Place Bid</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Auction;
