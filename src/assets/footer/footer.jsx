import React from "react";
import "./footer.css";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import { PiXLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">

        <div className="footer-col">
          <h4>How it works</h4>
          <div className="footer-subgroup">
            <h2>Stakeholders</h2>
            <a href="#">Agents</a>
            <a href="#">Commercial agents</a>
            <a href="#">Sellers</a>
            <a href="#">Buyers</a>
            <a href="#">Solicitors</a>
          </div>
          <div className="footer-subgroup">
            <h2>More information</h2>
            <a href="#">Plans</a>
            <a href="#">Sale timeline</a>
            <a href="#">Agent admin</a>
            <a href="#">Properties</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <div className="footer-subgroup">
            <h2>Features</h2>
            <a href="#">Offers</a>
            <a href="#">3D virtual tours</a>
            <a href="#">Video integration</a>
            <a href="#">Live broadcast</a>
            <a href="#">Viewings</a>
            <a href="#">Legal documents</a>
            <a href="#">Brochures</a>
            <a href="#">Enquiries</a>
          </div>
          <div className="footer-subgroup">
            <h2>Sale types</h2>
            <a href="#">Auction</a>
            <a href="#">Sale</a>
            <a href="#">Lettings</a>
            <a href="#">New homes</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <div className="footer-subgroup">
            <h2>All about us</h2>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Articles</a>
            <a href="#">Contact Us</a>
            <a href="#">Media</a>
            <a href="#">Testimonials</a>
          </div>
          <div className="footer-address">
            <p>Ireland 🇮🇪</p>
            <p>Unit 6E, Nutgrove Office Park<br/>Rathfarnham, Dublin, D14 AOX2</p>
            <p>General: +353 1 223 8727</p>
            <p>Sales: +353 1 913 1525</p>

            <br/>

            <p>United Kingdom 🇬🇧</p>
            <p>The Old Casino, 28 Fourth Avenue,<br/>Hove, East Sussex, BN3 2PJ</p>
            <p>General: +44 20 3870 4553</p>
            <p>Sales: +44 20 4579 1645</p>
            <p>Toll-free: +44 808 196 4553</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-policies">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Notice</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Security</a>
        </div>

        {/* <div className="footer-social">
          <FaFacebookF />
          <PiXLogoFill />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div> */}

        <button className="support-btn">Contact Support</button>
      </div>
    </footer>
  );
};

export default Footer;
