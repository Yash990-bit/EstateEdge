import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
    <div className='contact'>
      <h1 className="contact-title">Get in Touch with Us</h1>
      <p className="contact-description">Question,feedback,or need support? We're here to help.</p>
    </div>

    <form className="contact-message">
      <h2 className="contact-form-title">Contact Us</h2>
      <div className="contact-form-group">
        <label htmlFor="name" className="contact-form-label">Full Name</label>
        <input type="text" id="name" className="contact-form-input" required placeholder="Enter your name" />
      </div>

      <div className="contact-form-group">
        <label htmlFor="email" className="contact-form-label">Email Address</label>
        <input type="email" id="email" className="contact-form-input" required placeholder="Enter your Email?" />
      </div> 

      <div className="contact-form-group">
        <label htmlFor="subject" className="contact-form-label">Subject</label>
        <input type="text" id="subject" className="contact-form-input" required placeholder="What is this about?" />
      </div>

      <div className="contact-form-group">
        <label htmlFor="message" className="contact-form-label">Message</label>
        <textarea id="message" className="contact-form-textarea" required placeholder="Type your message here..."></textarea>
      </div>

      <button type="submit" className="contact-form-button">Send Message</button>
    </form>
    </>
  )
}

export default Contact;