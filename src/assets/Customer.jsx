import React, { useEffect, useRef } from 'react';
import Chaitanya from "../assets/images/Chaitanya.png";
import Rudraksh from "../assets/images/Rudraksh.png";
import Shaurya from "../assets/images/Shaurya.png";
import Anshuman from "../assets/images/Anshuman.png";

import "../App.css";

function Customer() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    let scrollAmount = 0;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollAmount += 1;
      scrollContainer.scrollLeft = scrollAmount;

      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // Reset when halfway scrolled
      }

      requestAnimationFrame(scroll);
    };
    const duplicateContent = () => {
      const content = scrollContainer.innerHTML;
      scrollContainer.innerHTML += content;
    };

    duplicateContent();
    scroll();

  }, []);

  
    return (
      <>
  
        <div className="Customer-section">
          <h2>Hear From <span>Our Happy Customer</span></h2>
          <p>Real stories from users who've transformed their lives with our services.</p>
  
          <div className="testimonial-carousel" ref={scrollRef}>
            <div className="testimonial-card">
              <img src={Chaitanya} alt="chaitanya" />
              <p>"Thank you Auction House..."</p>
              <h4>Chaitanya Singh</h4>
            </div>
            <div className="testimonial-card">
              <img src={Rudraksh} alt="rudraksh" />
              <p>"I came to know about Auction House..."</p>
              <h4>Satya Yadav</h4>
            </div>
            <div className="testimonial-card">
              <img src={Shaurya} alt="shaurya" />
              <p>"I could schedule viewings..."</p>
              <h4>Emily T.</h4>
            </div>
            <div className="testimonial-card">
              <img src={Anshuman} alt="anshuman" />
              <p>"Great platform!..."</p>
              <h4>Ravi K.</h4>
            </div>
          </div>
        </div>

      </>
    );
  }
  export default Customer;