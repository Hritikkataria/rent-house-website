import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import properties from '../data/properties';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  
  // Simulate additional images for the gallery
  const additionalImages = [
    "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1560448204-603b3fc33dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ];

  useEffect(() => {
    // Find the property with the matching ID
    const propertyData = properties.find(p => p.id === parseInt(id));
    
    if (propertyData) {
      // Create a full property object with more details
      const enhancedProperty = {
        ...propertyData,
        description: "This beautiful property offers modern living spaces with high-end finishes throughout. The open floor plan creates a seamless flow between the kitchen, dining, and living areas, perfect for entertaining. Large windows provide abundant natural light and stunning views. The property features high ceilings, hardwood floors, and premium appliances. Located in a highly desirable neighborhood with easy access to local amenities including shops, restaurants, parks, and public transportation.",
        features: [
          "Central air conditioning",
          "In-unit washer and dryer",
          "Stainless steel appliances",
          "Hardwood floors",
          "Walk-in closets",
          "Fitness center access",
          "Pet-friendly",
          "24/7 maintenance"
        ],
        contactInfo: {
          agent: "Jane Smith",
          phone: "(555) 123-4567",
          email: "jane.smith@rentnest.com"
        },
        images: [propertyData.image, ...additionalImages]
      };
      
      setProperty(enhancedProperty);
    }
    
    setLoading(false);
  }, [id]);

  const handleFavoriteToggle = () => {
    if (property) {
      if (isFavorite(property.id)) {
        removeFavorite(property.id);
      } else {
        addFavorite(property);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading property details...</div>;
  }

  if (!property) {
    return <div className="not-found">Property not found</div>;
  }

  const isPropertyFavorite = isFavorite(property.id);

  return (
    <div className="property-details-page">
      <div className="back-link-container">
        <Link to="/" className="back-link">← Back to listings</Link>
      </div>
      
      <div className="property-header">
        <div>
          <h1>{property.title}</h1>
          <p className="property-location-details">{property.location}</p>
        </div>
        <div className="property-price-details">${property.price}<span>/month</span></div>
      </div>
      
      <div className="gallery-container">
        <div className="main-image">
          <img src={property.images[activeImage]} alt={property.title} />
          <button 
            className={`details-favorite-btn ${isPropertyFavorite ? 'active' : ''}`}
            onClick={handleFavoriteToggle}
            aria-label={isPropertyFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <span className="favorite-icon-text">
              {isPropertyFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </span>
            <span className="favorite-icon">
              {isPropertyFavorite ? '❤️' : '🤍'}
            </span>
          </button>
        </div>
        <div className="image-thumbnails">
          {property.images.map((image, index) => (
            <div 
              key={index} 
              className={`thumbnail ${activeImage === index ? 'active' : ''}`}
              onClick={() => setActiveImage(index)}
            >
              <img src={image} alt={`${property.title} - image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="details-grid">
        <div className="details-left">
          <section className="details-section">
            <h2>Property Details</h2>
            <div className="property-attributes">
              <div className="attribute">
                <span className="attribute-label">Type</span>
                <span className="attribute-value">{property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span>
              </div>
              <div className="attribute">
                <span className="attribute-label">Bedrooms</span>
                <span className="attribute-value">{property.bedrooms}</span>
              </div>
              <div className="attribute">
                <span className="attribute-label">Bathrooms</span>
                <span className="attribute-value">{property.bathrooms}</span>
              </div>
              <div className="attribute">
                <span className="attribute-label">Square Feet</span>
                <span className="attribute-value">{property.area}</span>
              </div>
            </div>
          </section>
          
          <section className="details-section">
            <h2>Description</h2>
            <p>{property.description}</p>
          </section>
          
          <section className="details-section">
            <h2>Features & Amenities</h2>
            <ul className="features-list">
              {property.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        </div>
        
        <div className="details-right">
          <section className="details-section">
            <h2>Location</h2>
            <div className="map-container">
              {/* Placeholder for map - in a real app, you would use Google Maps or similar */}
              <div className="map-placeholder">
                <div className="map-pin"></div>
                <p>Map view of {property.location}</p>
              </div>
            </div>
          </section>
          
          <section className="details-section contact-section">
            <h2>Contact Information</h2>
            <div className="agent-info">
              <div className="agent-photo"></div>
              <div className="agent-details">
                <h3>{property.contactInfo.agent}</h3>
                <p>{property.contactInfo.phone}</p>
                <p>{property.contactInfo.email}</p>
              </div>
            </div>
            <form className="contact-form">
              <h3>Send a Message</h3>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit" className="contact-btn">Send Message</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails; 