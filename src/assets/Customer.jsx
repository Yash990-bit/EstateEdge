import React from 'react';
import Chaitanya from "../assets/images/Chaitanya.png";
import Rudraksh from "../assets/images/Rudraksh.png";
import Shaurya from "../assets/images/Shaurya.png";
import Anshuman from "../assets/images/Anshuman.png";
import Mayank from "../assets/images/Mayank.png";
import "../App.css";

function Customer() {
  const testimonials = [
    {
      id: 1,
      name: "Chaitanya Singh",
      image: Chaitanya,
      text: "\"Thank you Auction House! I found my dream home in record time.\""
    },
    {
      id: 2,
      name: "Rudraksh Sharma",
      image: Rudraksh,
      text: "\"I came to know about Auction House and it changed my property game.\""
    },
    {
      id: 3,
      name: "Shaurya Sharma",
      image: Shaurya,
      text: "\"I could schedule viewings instantly. seamless experience!\""
    },
    {
      id: 4,
      name: "Anshuman Mehta",
      image: Anshuman,
      text: "\"Great platform! Sold my property within a week.\""
    },
    {
      id: 5,
      name: "Mayank Sharma",
      image: Mayank,
      text: "\"Highly recommended for anyone looking to buy or sell quickly.\""
    }
  ];

  return (
    <div className="Customer-section">
      <h2>Hear From <span>Our Happy Customers</span></h2>
      <p>Real stories from users who've transformed their lives with our services.</p>

      <div className="carousel-container">
        <div className="carousel-track">
          {/* Original List */}
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>{item.text}</p>
              <h4>{item.name}</h4>
            </div>
          ))}

          {/* Duplicated List for Infinite Scroll */}
          {testimonials.map((item) => (
            <div className="testimonial-card" key={`dup-${item.id}`}>
              <img src={item.image} alt={item.name} />
              <p>{item.text}</p>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customer;