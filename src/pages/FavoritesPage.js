import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import PropertyCard from '../components/PropertyCard';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites, clearFavorites } = useFavorites();

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h1>My Favorite Properties</h1>
        <p>Manage your saved properties</p>
      </div>

      {favorites.length > 0 ? (
        <>
          <div className="favorites-actions">
            <button className="clear-favorites-btn" onClick={clearFavorites}>
              Clear All Favorites
            </button>
            <p className="favorites-count">
              {favorites.length} {favorites.length === 1 ? 'property' : 'properties'} saved
            </p>
          </div>

          <div className="favorites-grid">
            {favorites.map(property => (
              <div className="favorite-item" key={property.id}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="no-favorites">
          <div className="no-favorites-icon">💔</div>
          <h2>No Favorites Yet</h2>
          <p>You haven't saved any properties to your favorites list.</p>
          <Link to="/" className="browse-properties-btn">
            Browse Properties
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage; 