import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import '../styles/UserDashboard.css';

const events = [
  {
    id: 1,
    name: 'Vibe Coding',
    date: 'Day 3, 2:30 PM - 6:00 PM',
    venue: 'L101, IIT Bhilai',
    color: '#9333ea',
  },
  {
    id: 2,
    name: 'Cosmic Dance',
    date: 'Day 2, 6:00 PM',
    venue: 'Main Stage',
    color: '#ec4899',
  },
  {
    id: 3,
    name: 'Stellar Beats',
    date: 'Day 1, 8:00 PM',
    venue: 'Amphitheater',
    color: '#06b6d4',
  },
  {
    id: 4,
    name: 'Quantum Quiz',
    date: 'Day 2, 3:00 PM',
    venue: 'Auditorium',
    color: '#8b5cf6',
  },
  {
    id: 5,
    name: 'Nebula Art',
    date: 'Day 3, 10:00 AM',
    venue: 'Art Gallery',
    color: '#f59e0b',
  },
  {
    id: 6,
    name: 'Robotics Arena',
    date: 'Day 1, 2:00 PM',
    venue: 'Tech Lab',
    color: '#10b981',
  },
];

const UserDashboard = () => {
  const { user, logout, registerForEvent } = useAuth();

  if (!user) {
    return null;
  }

  const registeredEvents = events.filter(e => user.registeredEvents.includes(e.id));
  const availableEvents = events.filter(e => !user.registeredEvents.includes(e.id));

  return (
    <motion.div
      className="user-dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div className="user-info">
          <div className="user-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="user-details">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">{user.email}</p>
          </div>
        </div>
        <motion.button
          className="logout-button"
          onClick={logout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Logout
        </motion.button>
      </div>

      {/* Quick Stats */}
      <div className="dashboard-stats">
        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="stat-value">{registeredEvents.length}</div>
          <div className="stat-label">Events Registered</div>
        </motion.div>
        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="stat-value">{user.ticketTier || 'None'}</div>
          <div className="stat-label">Ticket Tier</div>
        </motion.div>
        <motion.div
          className="stat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="stat-value">{events.length}</div>
          <div className="stat-label">Total Events</div>
        </motion.div>
      </div>

      {/* Registered Events Section */}
      {registeredEvents.length > 0 && (
        <motion.section
          className="dashboard-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="section-title">Your Registrations</h3>
          <div className="events-list">
            {registeredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="event-card registered"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                style={{ borderLeftColor: event.color }}
              >
                <div className="event-header">
                  <h4 className="event-name" style={{ color: event.color }}>
                    {event.name}
                  </h4>
                  <span className="registered-badge">✓ Registered</span>
                </div>
                <p className="event-date">📅 {event.date}</p>
                <p className="event-venue">📍 {event.venue}</p>
                <button className="add-calendar-btn">Add to Calendar</button>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Available Events Section */}
      {availableEvents.length > 0 && (
        <motion.section
          className="dashboard-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="section-title">Available Events</h3>
          <div className="events-list">
            {availableEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="event-card available"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                style={{ borderLeftColor: event.color }}
              >
                <div className="event-header">
                  <h4 className="event-name" style={{ color: event.color }}>
                    {event.name}
                  </h4>
                </div>
                <p className="event-date">📅 {event.date}</p>
                <p className="event-venue">📍 {event.venue}</p>
                <motion.button
                  className="register-btn"
                  style={{ backgroundColor: event.color }}
                  onClick={() => registerForEvent(event.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </motion.div>
  );
};

export default UserDashboard;
