import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favorites } = useFavorites();
  const { currentUser, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>RentNest</Link>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/favorites" className="favorites-link" onClick={closeMenu}>
            Favorites
            {favorites.length > 0 && (
              <span className="favorites-count-badge">{favorites.length}</span>
            )}
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="user-profile-link" onClick={closeMenu}>
                <span className="profile-name">{currentUser.name}</span>
                {currentUser.avatar && (
                  <div className="profile-avatar-small">
                    <img src={currentUser.avatar} alt={currentUser.name} />
                  </div>
                )}
              </Link>
              <a href="/" className="logout-link" onClick={handleLogout}>Logout</a>
            </>
          ) : (
            <Link to="/login" className="login-btn" onClick={closeMenu}>Login</Link>
          )}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 