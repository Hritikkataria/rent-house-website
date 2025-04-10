import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the favorites context
const FavoritesContext = createContext();

// Custom hook to use the favorites context
export const useFavorites = () => {
  return useContext(FavoritesContext);
};

// Favorites provider component
export const FavoritesProvider = ({ children }) => {
  // Initialize state with favorites from localStorage if available
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Save favorites to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add a property to favorites
  const addFavorite = (property) => {
    // Check if property is already in favorites
    if (!favorites.some(fav => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  // Remove a property from favorites
  const removeFavorite = (propertyId) => {
    setFavorites(favorites.filter(property => property.id !== propertyId));
  };

  // Check if a property is in favorites
  const isFavorite = (propertyId) => {
    return favorites.some(property => property.id === propertyId);
  };

  // Clear all favorites
  const clearFavorites = () => {
    setFavorites([]);
  };

  // Value object to be provided to consumers
  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    clearFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext; 