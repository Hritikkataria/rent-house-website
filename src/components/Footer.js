import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to your backend
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
      // Reset the subscribed message after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <>
      {/* Newsletter section moved outside of footer */}
      <div className="newsletter-container">
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3>Subscribe to our Newsletter</h3>
            <p>Get the latest property listings and updates directly to your inbox</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button type="submit">Subscribe</button>
            </div>
            {subscribed && <p className="success-message">Thank you for subscribing!</p>}
          </form>
        </div>
      </div>
    
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-heading">RentNest</h3>
              <p className="footer-description">
                Find your perfect home with RentNest. We offer a wide range of properties for every budget and lifestyle.
              </p>
              <div className="social-media">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
                <li><Link to="/login">Login / Register</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-heading">Property Types</h3>
              <ul className="footer-links">
                <li><Link to="/">Apartments</Link></li>
                <li><Link to="/">Houses</Link></li>
                <li><Link to="/">Villas</Link></li>
                <li><Link to="/">Commercial</Link></li>
                <li><Link to="/">Featured Properties</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-heading">Contact Info</h3>
              <address className="contact-info">
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  123 Property Street, Cityville, State 12345
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  <a href="tel:+1234567890">(123) 456-7890</a>
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@rentnest.com">info@rentnest.com</a>
                </p>
                <p>
                  <i className="fas fa-clock"></i>
                  Mon - Fri: 9:00 AM - 5:00 PM
                </p>
              </address>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {currentYear} RentNest. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/terms">Terms of Service</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 