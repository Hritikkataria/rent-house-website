import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const { login, register, error, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let success;
    if (showRegister) {
      success = register(name, email, password);
    } else {
      success = login(email, password);
    }
    
    if (success) {
      navigate('/');
    }
    
    setIsSubmitting(false);
  };
  
  const toggleForm = () => {
    setShowRegister(!showRegister);
    setEmail('');
    setPassword('');
    setName('');
  };

  // Demo login with pre-filled credentials
  const handleDemoLogin = () => {
    setEmail('user@example.com');
    setPassword('password123');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>{showRegister ? 'Create Account' : 'Welcome Back'}</h1>
          <p>{showRegister ? 'Join our community of property renters' : 'Sign in to access your account'}</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          {showRegister && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          
          {!showRegister && (
            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
            </div>
          )}
          
          <button 
            type="submit" 
            className="login-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Loading...' : showRegister ? 'Create Account' : 'Sign In'}
          </button>
        </form>
        
        {!showRegister && (
          <button
            onClick={handleDemoLogin}
            className="demo-login-button"
            type="button"
          >
            Use Demo Credentials
          </button>
        )}
        
        <div className="login-footer">
          <p>
            {showRegister ? 'Already have an account?' : 'Don\'t have an account?'}
            <button 
              type="button"
              className="toggle-form-button"
              onClick={toggleForm}
            >
              {showRegister ? 'Sign In' : 'Register Now'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 