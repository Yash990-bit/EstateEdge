import React, { useEffect, useState } from 'react';

const initialData = [
  { id: 1, item: "Studio Flat - London", bidder: "Nina", bid: "$1,350,884" },
  { id: 2, item: "Commercial Plot - Delhi", bidder: "Qasim", bid: "$691,144" },
  { id: 3, item: "Warehouse - Chennai", bidder: "Lena", bid: "₹2,724,702" },
  { id: 4, item: "Beach House - Goa", bidder: "Tina", bid: "$3,950,883" },
  { id: 5, item: "Studio Flat - London", bidder: "Bob", bid: "$3,342,475" },
  { id: 6, item: "Luxury Apartment - NYC", bidder: "Alice", bid: "€1,138,801" },
  { id: 7, item: "Penthouse - Mumbai", bidder: "David", bid: "₹3,627,463" },
  { id: 8, item: "Warehouse - Chennai", bidder: "Alice", bid: "$4,079,687" },
  { id: 9, item: "Beach House - Goa", bidder: "Ivan", bid: "₹4,363,146" },
  { id: 10, item: "Condo - Singapore", bidder: "Mohan", bid: "₹3,648,893" },
  { id: 11, item: "Penthouse - Mumbai", bidder: "Faisal", bid: "$537,153" },
  { id: 12, item: "Farmhouse - Punjab", bidder: "Charlie", bid: "$4,491,214" },
  { id: 13, item: "Office Space - Bangalore", bidder: "Priya", bid: "£3,138,494" },
  { id: 14, item: "Farmhouse - Punjab", bidder: "Riya", bid: "₹608,038" },
  { id: 15, item: "Studio Flat - London", bidder: "Ivan", bid: "$1,056,570" },
  { id: 16, item: "Villa - Dubai", bidder: "Lena", bid: "₹3,193,055" },
  { id: 17, item: "Condo - Singapore", bidder: "Hannah", bid: "₹3,412,156" },
  { id: 18, item: "Studio Flat - London", bidder: "Hannah", bid: "$4,748,341" },
  { id: 19, item: "Studio Flat - London", bidder: "Ivan", bid: "₹4,862,592" },
  { id: 20, item: "Warehouse - Chennai", bidder: "Grace", bid: "£3,352,869" },
];

// Simulate endTime + image for demo
const extendedData = initialData.map((item, i) => ({
  ...item,
  endTime: new Date(Date.now() + (5 + i) * 60 * 1000), // 5–24 minutes from now
  image: `https://source.unsplash.com/random/400x300?house,${i}` // random image
}));

function Auction() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    setAuctions(extendedData);
  }, []);

  // Timer updates
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
    <div style={{ padding: '20px' }}>
      <h1>Live Auctions</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {auctions.map((item) => (
          <div key={item.id} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            background: '#fefefe'
          }}>
            <img src={item.image} alt={item.item} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <h3>{item.item}</h3>
            <p><strong>Bidder:</strong> {item.bidder}</p>
            <p><strong>Current Bid:</strong> {item.bid}</p>
            <p><strong>Time Remaining:</strong> {item.countdown || 'Loading...'}</p>
            <button style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Place Bid
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Auction;
