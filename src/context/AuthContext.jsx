import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  const signup = (email, password, name) => {
    // Create user object
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      registeredEvents: [],
      ticketTier: null,
      joinedDate: new Date().toISOString(),
    };
    
    // Save to localStorage
    const users = JSON.parse(localStorage.getItem('meraz_users') || '[]');
    users.push({ ...newUser, password }); // Password stored (not secure - for demo)
    localStorage.setItem('meraz_users', JSON.stringify(users));
    
    setUser(newUser);
    setIsAuthOpen(false);
    return newUser;
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('meraz_users') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      setIsAuthOpen(false);
      return userWithoutPassword;
    }
    
    throw new Error('Invalid email or password');
  };

  const logout = () => {
    setUser(null);
  };

  const registerForEvent = (eventId) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      registeredEvents: [...new Set([...user.registeredEvents, eventId])],
    };
    
    setUser(updatedUser);
    
    // Update localStorage
    const users = JSON.parse(localStorage.getItem('meraz_users') || '[]');
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex].registeredEvents = updatedUser.registeredEvents;
      localStorage.setItem('meraz_users', JSON.stringify(users));
    }
  };

  const updateTicketTier = (tier) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      ticketTier: tier,
    };
    
    setUser(updatedUser);
    
    // Update localStorage
    const users = JSON.parse(localStorage.getItem('meraz_users') || '[]');
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex].ticketTier = tier;
      localStorage.setItem('meraz_users', JSON.stringify(users));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthOpen,
        setIsAuthOpen,
        authMode,
        setAuthMode,
        signup,
        login,
        logout,
        registerForEvent,
        updateTicketTier,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
