import React, { useEffect, useState } from 'react';
import data from '../../data/data.json'; 
import './Auction.css';

const extendedData = data.map((item, i) => ({
  ...item,
  endTime: new Date(Date.now() + (5 + i) * 60 * 1000),
  image: `https://source.unsplash.com/random/400x300?house,${i}`
}));

function Auction() {
  const [auctions, setAuctions] =useState([]);

  useEffect(() => {
    setAuctions(extendedData);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAuctions(prev =>
        prev.map(item => {
          const timeLeft = Math.max(0,new Date(item.endTime) - new Date());
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
    return `${hrs.toString().padStart(2,'0')}:${mins
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
