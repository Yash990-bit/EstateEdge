import React,{useState} from 'react'
import './Contact.css'

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
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(()=>setResult(""),2000)
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(()=>setResult(""),2000)
    }
  };
  return (
    <>
    <div className='contact'>
      <h1 className="contact-title">Get in <span className="highlight">Touch with</span> Us</h1>
      <p className="contact-description">Question,feedback,or need support? We're here to help.</p>
    </div>

    <form className="contact-message" onSubmit={onSubmit}>
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
      {result && <p className="contact-result">{result}</p>}

    <div className="connect-with-us">
      <h3 className="connect-title">Connect With Us</h3>
      <div className="connect-icons">
      <a href="https://www.instagram.com/whyash7" target="_blank" rel="noopener noreferrer" className="connect-icon facebook">Instagram</a>
      <a href="https://github.com/Yash990-bit" target="_blank" rel="noopener noreferrer" className="connect-icon github">Github</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="connect-icon linkedin">LinkedIn</a>
      <a href="tel:+1234567890" className="connect-icon phone">Call</a>
    </div>
  </div>
    </form>
    </>
  )
}

export default Contact;