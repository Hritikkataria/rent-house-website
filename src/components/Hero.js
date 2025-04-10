import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', { location, price, propertyType });
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Find Your Perfect Rental Home</h1>
        <p>Discover thousands of rental properties in your area</p>
        
        <div className="search-container">
          <form onSubmit={handleSearch}>
            <div className="search-inputs">
              <div className="search-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  placeholder="City, neighborhood, or address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <div className="search-group">
                <label htmlFor="price">Price Range</label>
                <select
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="">Any Price</option>
                  <option value="0-500">$0 - $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-1500">$1,000 - $1,500</option>
                  <option value="1500-2000">$1,500 - $2,000</option>
                  <option value="2000+">$2,000+</option>
                </select>
              </div>
              
              <div className="search-group">
                <label htmlFor="type">Property Type</label>
                <select
                  id="type"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Any Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="studio">Studio</option>
                </select>
              </div>
              
              <button type="submit" className="search-button">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero; 