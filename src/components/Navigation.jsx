import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Navigation.css';

const Navigation = ({ currentPage, onNavigate, showContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'events', label: 'Events', icon: '🪐' },
    { id: 'map', label: 'Map', icon: '🗺️' },
  ];

  return (
    <>
      {/* Floating Navigation Button */}
      <motion.div
        className="nav-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : -20 }}
        transition={{ delay: showContent ? 0.5 : 0, duration: 0.8 }}
        style={{ pointerEvents: showContent ? 'auto' : 'none' }}
      >
        <motion.button
          className="nav-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? '✕' : '☰'}
          </motion.span>
        </motion.button>

        {/* Expanded Navigation Menu */}
        <motion.div
          className="nav-menu"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            scale: isExpanded ? 1 : 0.8,
            y: isExpanded ? 0 : -20,
            pointerEvents: isExpanded ? 'auto' : 'none',
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => {
                onNavigate(item.id);
                setIsExpanded(false);
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                y: isExpanded ? 0 : -10,
              }}
              transition={{
                delay: isExpanded ? index * 0.1 : 0,
                duration: 0.3,
              }}
              whileHover={{
                scale: 1.05,
                x: 5,
                backgroundColor: 'rgba(147, 51, 234, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {currentPage === item.id && (
                <motion.div
                  className="active-indicator"
                  layoutId="activeIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navigation;
