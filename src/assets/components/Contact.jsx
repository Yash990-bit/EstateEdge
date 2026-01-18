import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3c8bd682-8a6c-4d1c-82a2-50bb5ce8cccf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
      setTimeout(() => setResult(""), 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => setResult(""), 3000);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-glass-card">
        <a href="/" className="back-link">← Back to Home</a>

        <div className="contact-header">
          <h1>Get in <span className="highlight">Touch</span></h1>
          <p>We'd love to hear from you. Send us a message.</p>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required placeholder="Full Name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required placeholder="email address" />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required placeholder="Project Inquiry" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required placeholder="Tell us about your project..."></textarea>
          </div>

          <button type="submit" className="submit-btn hover-effect">
            Send Message
          </button>

          {result && <div className={`form-result ${result.includes("Success") ? "success" : "error"}`}>{result}</div>}
        </form>

        <div className="social-links-footer">
          <p>Connect with us:</p>
          <div className="social-icons-row">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="s-icon insta">💬</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="s-icon gh">💻</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="s-icon li">🧑‍💼</a>
            <a href="tel:+1234567890" className="s-icon ph">📞</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;