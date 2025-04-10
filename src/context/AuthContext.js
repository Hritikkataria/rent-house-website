import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Sample user data
const dummyUsers = [
  { 
    id: 1, 
    email: 'user@example.com', 
    password: 'password123', 
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  { 
    id: 2, 
    email: 'jane@example.com', 
    password: 'password123', 
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  }
];

// Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Load user from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    setError('');
    const user = dummyUsers.find(
      user => user.email === email && user.password === password
    );
    
    if (user) {
      // Remove the password before storing
      const { password, ...userWithoutPassword } = user;
      setCurrentUser(userWithoutPassword);
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      return true;
    } else {
      setError('Invalid email or password');
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  // Register function (simulated)
  const register = (name, email, password) => {
    setError('');
    // Check if email already exists
    if (dummyUsers.some(user => user.email === email)) {
      setError('Email already in use');
      return false;
    }

    // In a real app, this would add to a database
    // For this demo, we'll just log in the user
    const newUser = {
      id: dummyUsers.length + 1,
      email,
      name,
      avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`
    };

    setCurrentUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return true;
  };

  // Value object to be provided to consumers
  const value = {
    currentUser,
    isLoading,
    error,
    login,
    logout,
    register,
    isAuthenticated: !!currentUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for easy consumption
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext; 