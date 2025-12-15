import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <h4>Subscribe & Follow</h4>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact Us</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
      </div>

      <div className="footer-contact">
        <h4>Contact & Branches</h4>
        <p>Head Office: 01-5916252 | 9851273832</p>
        <p>Kumaripati Office: +977 1-5920463 | 980326136</p>
        <p>Chitwan Office: 056-510672 | 9762345067</p>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 EduNepal Education Consultancy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
