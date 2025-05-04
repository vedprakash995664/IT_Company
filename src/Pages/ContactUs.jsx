import React from 'react';
import './CSS/ContactUs.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ContactUs = () => {
  return (
    <>
      <Header/>
      <div className="contactUs-page">
        {/* Hero Section with Background Image */}
        <div className="contactUs-hero">
          <div className="contactUs-hero-overlay">
            <h1 style={{color:"#FACC15"}}>Contact Us</h1>
            <p>We'd love to hear from you</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="contactUs-container">
          {/* Left Side - Contact Form */}
          <div className="contactUs-form-container">
            <h2>Get in Touch</h2>
            <form className="contactUs-form">
              <div className="contactUs-form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="contactUs-form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>
              <div className="contactUs-form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" placeholder="Your phone number" />
              </div>
              <div className="contactUs-form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="contactUs-submit-btn">Send Message</button>
            </form>

            <div className="contactUs-info">
              <div className="contactUs-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>123 Business Street, City, Country</p>
              </div>
              <div className="contactUs-info-item">
                <i className="fas fa-phone"></i>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contactUs-info-item">
                <i className="fas fa-envelope"></i>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="contactUs-map-container">
            <iframe
              title="Business Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373510518!2d-73.98811768459382!3d40.748440179327925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623251157759!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              className="contactUs-map"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;