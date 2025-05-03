import React from 'react';
import './CSS/Footer.css';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section footer-left">
            <img src="/Images/logo1.png" alt="Logo" className="footer-logo" />
            <p>Empowering businesses through technology and innovation.</p>
          </div>

          <div className="footer-section">
            <h4>Important Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">Portfolio</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/services/web-development">Web Development</a></li>
              <li><a href="/services/app-development">App Development</a></li>
              <li><a href="/services/app-development">Graphic Design</a></li>
              <li><a href="/services/seo">SEO</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: support@example.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Location: New York, USA</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} TechVine Technologies. All rights reserved.</p>
        <p className="footer-dev">
          Developed by <a href="https://ervedprakash.netlify.app" target="_blank" rel="noopener noreferrer">Er. Ved Prakash</a>
        </p>
      </div>
    </>
  );
}

export default Footer;
