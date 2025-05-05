import React, { useEffect, useState } from 'react';
// import './LiveAuction.css';

const Auction = () => {
  const [auctionItem, setAuctionItem] = useState(null);
  const [timeLeft, setTimeLeft] = useState('');

  const API_URL = 'https://your-api.com/live-auction'; // replace with your API

  const calculateTimeLeft = (endTime) => {
    const difference = new Date(endTime) - new Date();
    if (difference <= 0) return 'Auction Ended';

    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    const hours = Math.floor((difference / 1000 / 60 / 60) % 24);
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setAuctionItem(data);
      } catch (error) {
        console.error('Error fetching auction data:', error);
      }
    };

    fetchAuction();
    const interval = setInterval(fetchAuction, 5000); // update data every 5 sec
    return () => clearInterval(interval);
  }, []);

  // Timer countdown effect
  useEffect(() => {
    if (!auctionItem?.endTime) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(auctionItem.endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [auctionItem]);

  if (!auctionItem) return <p>Loading live auction...</p>;

  return (
    <div className="live-auction">
      <h2>Live Auction: {auctionItem.title}</h2>
      <img src={auctionItem.image} alt={auctionItem.title} className="auction-image" />
      <p>Current Bid: ₹{auctionItem.currentBid}</p>
      <p>Time Remaining: {timeLeft}</p>
      <button>Place Bid</button>
    </div>
  );
};

export default Auction;