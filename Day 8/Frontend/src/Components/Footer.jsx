import React from 'react';
import { Link } from 'react-router-dom';
import "../Assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
          <ul className="footer-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">Privacy Policy</Link></li>
            <li><Link to="/services">Terms and Conditions</Link></li>
            <li><Link to="/contact">FAQ</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;