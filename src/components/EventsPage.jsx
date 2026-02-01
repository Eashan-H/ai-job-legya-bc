import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/EventsPage.css';

const events = [
  {
    id: 1,
    name: 'Vibe Coding',
    category: 'Technical',
    description: 'AI-assisted coding competition where participants leverage LLMs to develop complete, functional solutions.',
    date: 'Day 3, 2:30 PM - 6:00 PM',
    venue: 'L101, IIT Bhilai',
    contact: 'Vatsal (+91-79838709173)',
    color: '#9333ea',
    planetSize: 'large',
  },
  {
    id: 2,
    name: 'Cosmic Dance',
    category: 'Cultural',
    description: 'An intergalactic dance competition where performers blend traditional and futuristic moves.',
    date: 'Day 2, 6:00 PM',
    venue: 'Main Stage',
    contact: 'Ananya (+91-9876543210)',
    color: '#ec4899',
    planetSize: 'medium',
  },
  {
    id: 3,
    name: 'Stellar Beats',
    category: 'Music',
    description: 'Experience music from across galaxies. Electronic fusion meets classical orchestration.',
    date: 'Day 1, 8:00 PM',
    venue: 'Amphitheater',
    contact: 'Rohan (+91-8765432109)',
    color: '#06b6d4',
    planetSize: 'large',
  },
  {
    id: 4,
    name: 'Quantum Quiz',
    category: 'Technical',
    description: 'Test your knowledge across science, technology, and space exploration.',
    date: 'Day 2, 3:00 PM',
    venue: 'Auditorium',
    contact: 'Priya (+91-9654321098)',
    color: '#8b5cf6',
    planetSize: 'small',
  },
  {
    id: 5,
    name: 'Nebula Art',
    category: 'Cultural',
    description: 'Live art competition where artists create cosmic masterpieces.',
    date: 'Day 3, 10:00 AM',
    venue: 'Art Gallery',
    contact: 'Arjun (+91-8543210987)',
    color: '#f59e0b',
    planetSize: 'medium',
  },
  {
    id: 6,
    name: 'Robotics Arena',
    category: 'Technical',
    description: 'Build and battle autonomous robots in zero-gravity simulated challenges.',
    date: 'Day 1, 2:00 PM',
    venue: 'Tech Lab',
    contact: 'Kavya (+91-9432109876)',
    color: '#10b981',
    planetSize: 'medium',
  },
];

const EventModal = ({ event, onClose }) => {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="event-modal"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        style={{ borderColor: event.color }}
      >
        <motion.button
          className="modal-close"
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          ✕
        </motion.button>

        <div className="modal-header" style={{ borderBottomColor: event.color }}>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: event.color }}
          >
            {event.name}
          </motion.h2>
          <motion.span
            className="event-category"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{ backgroundColor: event.color + '30', color: event.color }}
          >
            {event.category}
          </motion.span>
        </div>

        <motion.div
          className="modal-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="event-description">{event.description}</p>

          <div className="event-details">
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <div>
                <span className="detail-label">Date & Time</span>
                <span className="detail-value">{event.date}</span>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div>
                <span className="detail-label">Venue</span>
                <span className="detail-value">{event.venue}</span>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-icon">👤</span>
              <div>
                <span className="detail-label">Contact</span>
                <span className="detail-value">{event.contact}</span>
              </div>
            </div>
          </div>

          <motion.button
            className="register-button"
            style={{ backgroundColor: event.color }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Register for Event
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Planet = ({ event, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const planetVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const getSizeClass = () => {
    switch (event.planetSize) {
      case 'large': return 'planet-large';
      case 'medium': return 'planet-medium';
      case 'small': return 'planet-small';
      default: return 'planet-medium';
    }
  };

  return (
    <motion.div
      className={`planet ${getSizeClass()}`}
      variants={planetVariants}
      initial="initial"
      animate="animate"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      style={{
        left: `${10 + (event.id - 1) * 15}%`,
        top: `${20 + ((event.id - 1) % 3) * 25}%`,
      }}
    >
      {/* Planet Core */}
      <motion.div
        className="planet-core"
        style={{ backgroundColor: event.color }}
        animate={{
          rotate: 360,
          boxShadow: isHovered
            ? `0 0 60px ${event.color}aa, inset 0 0 30px ${event.color}55`
            : `0 0 30px ${event.color}66, inset 0 0 20px ${event.color}33`,
        }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' } }}
      />

      {/* Orbital Ring */}
      <motion.div
        className="planet-ring"
        style={{ borderColor: event.color + '55' }}
        animate={{
          rotate: -360,
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      {/* Stardust Particles on Hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="stardust"
                style={{
                  backgroundColor: event.color,
                  left: '50%',
                  top: '50%',
                }}
                initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 8) * 50,
                  y: Math.sin((i * Math.PI * 2) / 8) * 50,
                  opacity: [1, 1, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Event Label */}
      <motion.div
        className="planet-label"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
      >
        <span className="label-text">{event.name}</span>
        <span className="label-category">{event.category}</span>
      </motion.div>
    </motion.div>
  );
};

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="events-page">
      <motion.div
        className="events-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="events-title">Cosmic Events</h1>
        <p className="events-subtitle">Explore the galaxy of experiences</p>
      </motion.div>

      <div className="planets-container">
        {events.map((event, index) => (
          <Planet
            key={event.id}
            event={event}
            onClick={() => setSelectedEvent(event)}
          />
        ))}
      </div>

      {/* Galaxy Grid Background */}
      <div className="galaxy-grid"></div>

      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsPage;
