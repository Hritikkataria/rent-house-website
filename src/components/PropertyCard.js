import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  const { id, title, price, location, bedrooms, bathrooms, area, image, type, featured } = property;
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const isPropertyFavorite = isFavorite(id);

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Prevent navigation when clicking the favorite button
    
    if (isPropertyFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(property);
    }
  };

  return (
    <div className={`property-card ${featured ? 'featured' : ''}`}>
      {featured && <div className="featured-tag">Featured</div>}
      <button 
        className={`favorite-btn ${isPropertyFavorite ? 'active' : ''}`}
        onClick={handleFavoriteClick}
        aria-label={isPropertyFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <span className="favorite-icon">
          {isPropertyFavorite ? '❤️' : '🤍'}
        </span>
      </button>
      <div className="property-image">
        <img src={image} alt={title} />
      </div>
      <div className="property-info">
        <div className="property-type">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
        <h3 className="property-title">{title}</h3>
        <p className="property-location">{location}</p>
        <div className="property-price">${price}<span>/month</span></div>
        <div className="property-details">
          <div className="detail">
            <i className="icon">🛏️</i>
            <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="detail">
            <i className="icon">🚿</i>
            <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="detail">
            <i className="icon">📏</i>
            <span>{area} sq ft</span>
          </div>
        </div>
        <Link to={`/property/${id}`} className="view-property-btn">View Property</Link>
      </div>
    </div>
  );
};

export default PropertyCard; 