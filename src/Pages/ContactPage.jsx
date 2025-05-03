import React from 'react';
import './CSS/ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-text">
          <h1>What can we do for you?</h1>
          <p>
            We help businesses scale through technology. Subscribe to stay updated with our insights, services, and offers.
          </p>
        </div>
        <div className="contact-form">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
