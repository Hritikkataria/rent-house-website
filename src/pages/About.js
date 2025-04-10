import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About RentNest</h1>
        <p>Your trusted partner in finding the perfect rental home</p>
      </div>

      <div className="about-section">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Modern apartment building"
          />
        </div>
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            At RentNest, we believe finding your next home should be an exciting journey, not a stressful chore. 
            Our mission is to simplify the rental process by connecting quality properties with responsible 
            tenants through a transparent, user-friendly platform.
          </p>
          <p>
            Founded in 2023, RentNest has quickly become a trusted name in the rental market, offering 
            a curated selection of properties that meet our high standards for quality, safety, and value.
          </p>
        </div>
      </div>

      <div className="about-section reverse">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Family in new home"
          />
        </div>
        <div className="about-content">
          <h2>Who We Serve</h2>
          <p>
            RentNest is designed for everyone in the rental ecosystem:
          </p>
          <ul>
            <li><strong>Renters</strong> - From young professionals and students to families and retirees, we help diverse renters find homes that match their lifestyle, budget, and location preferences.</li>
            <li><strong>Property Owners</strong> - We provide a platform for responsible landlords and property managers to showcase their properties to qualified, interested tenants.</li>
            <li><strong>Communities</strong> - By facilitating great matches between properties and renters, we help build stable, thriving neighborhoods.</li>
          </ul>
        </div>
      </div>

      <div className="about-section">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Team collaboration"
          />
        </div>
        <div className="about-content">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Transparency</h3>
              <p>We provide honest, complete information about all properties.</p>
            </div>
            <div className="value-item">
              <h3>Accessibility</h3>
              <p>Housing options for every budget and need.</p>
            </div>
            <div className="value-item">
              <h3>Quality</h3>
              <p>We maintain high standards for all listed properties.</p>
            </div>
            <div className="value-item">
              <h3>Community</h3>
              <p>We help build connections between people and places.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <p>Our dedicated professionals work tirelessly to make your rental experience seamless.</p>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Sarah Johnson</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Michael Chen</h3>
            <p>Property Relations</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Aisha Patel</h3>
            <p>Customer Experience</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>David Rodriguez</h3>
            <p>Marketing Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 