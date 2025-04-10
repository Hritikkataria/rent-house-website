import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import properties from '../data/properties';
import './PropertyListings.css';

const PropertyListings = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [activeFilter, setActiveFilter] = useState('all');

  const propertyTypes = ['all', ...new Set(properties.map(property => property.type))];

  const filterProperties = (type) => {
    setActiveFilter(type);
    if (type === 'all') {
      setFilteredProperties(properties);
    } else {
      setFilteredProperties(properties.filter(property => property.type === type));
    }
  };

  // Sort properties so featured ones appear first
  useEffect(() => {
    const sortedProperties = [...filteredProperties].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
    setFilteredProperties(sortedProperties);
  }, []);

  return (
    <section className="property-listings">
      <div className="section-header">
        <h2>Featured Properties</h2>
        <p>Explore our handpicked selection of premium rental properties</p>
      </div>

      <div className="filter-container">
        {propertyTypes.map(type => (
          <button 
            key={type} 
            className={`filter-btn ${activeFilter === type ? 'active' : ''}`}
            onClick={() => filterProperties(type)}
          >
            {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="properties-grid">
        {filteredProperties.map(property => (
          <div className="property-item" key={property.id}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyListings; 