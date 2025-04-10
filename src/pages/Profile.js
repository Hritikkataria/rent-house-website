import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { currentUser, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!currentUser) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <h1>My Profile</h1>
          <p>Manage your account information</p>
        </div>

        <div className="profile-content">
          <div className="profile-avatar">
            <img 
              src={currentUser.avatar || 'https://via.placeholder.com/150'} 
              alt={currentUser.name} 
            />
          </div>

          <div className="profile-details">
            <h2>{currentUser.name}</h2>
            <p className="profile-email">{currentUser.email}</p>
            <p className="profile-member-since">Member since: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="profile-actions">
            <button className="edit-profile-btn">Edit Profile</button>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-number">{5}</span>
              <span className="stat-label">Saved Properties</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{2}</span>
              <span className="stat-label">Recent Views</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{0}</span>
              <span className="stat-label">Applications</span>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3>Recent Activity</h3>
          <div className="profile-activity">
            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-heart"></i>
              </div>
              <div className="activity-details">
                <p className="activity-title">Added to favorites</p>
                <p className="activity-property">Luxury Apartment in Downtown</p>
                <p className="activity-time">2 days ago</p>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-eye"></i>
              </div>
              <div className="activity-details">
                <p className="activity-title">Viewed property</p>
                <p className="activity-property">Modern Condo with Pool Access</p>
                <p className="activity-time">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 