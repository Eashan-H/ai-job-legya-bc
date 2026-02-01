import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/SpaceMap.css';

const venues = [
  {
    id: 1,
    name: 'Main Stage',
    cluster: 'alpha',
    x: 30,
    y: 25,
    info: 'Primary performance venue for concerts and major events',
    events: ['Stellar Beats', 'Inauguration'],
  },
  {
    id: 2,
    name: 'L101',
    cluster: 'beta',
    x: 55,
    y: 40,
    info: 'Technical workshop and coding arena',
    events: ['Vibe Coding', 'Tech Talks'],
  },
  {
    id: 3,
    name: 'Amphitheater',
    cluster: 'alpha',
    x: 70,
    y: 30,
    info: 'Open-air venue for cultural performances',
    events: ['Cosmic Dance', 'Poetry Night'],
  },
  {
    id: 4,
    name: 'Art Gallery',
    cluster: 'gamma',
    x: 45,
    y: 60,
    info: 'Exhibition space for visual arts',
    events: ['Nebula Art', 'Photography'],
  },
  {
    id: 5,
    name: 'Auditorium',
    cluster: 'beta',
    x: 25,
    y: 55,
    info: 'Indoor venue for quizzes and presentations',
    events: ['Quantum Quiz', 'Debates'],
  },
  {
    id: 6,
    name: 'Tech Lab',
    cluster: 'gamma',
    x: 60,
    y: 70,
    info: 'Robotics and innovation workspace',
    events: ['Robotics Arena', 'Hackathon'],
  },
];

const SpaceMap = () => {
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [hoveredVenue, setHoveredVenue] = useState(null);

  const getClusterColor = (cluster) => {
    const colors = {
      alpha: '#ec4899',
      beta: '#8b5cf6',
      gamma: '#06b6d4',
    };
    return colors[cluster] || '#9333ea';
  };

  return (
    <div className="space-map">
      <motion.div
        className="map-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="map-title">Galaxy Navigation</h1>
        <p className="map-subtitle">Navigate through the Meraz cosmos</p>
      </motion.div>

      <div className="map-container">
        {/* Galaxy Background Grid */}
        <svg className="galaxy-svg" viewBox="0 0 100 100">
          {/* Grid Lines */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="rgba(147, 51, 234, 0.1)"
                strokeWidth="0.2"
              />
            </pattern>
            
            {/* Glow Effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="100" height="100" fill="url(#grid)" />

          {/* Connecting Lines Between Venues */}
          {venues.map((venue, i) => {
            if (i < venues.length - 1) {
              const next = venues[i + 1];
              return (
                <motion.line
                  key={`line-${i}`}
                  x1={venue.x}
                  y1={venue.y}
                  x2={next.x}
                  y2={next.y}
                  stroke={getClusterColor(venue.cluster)}
                  strokeWidth="0.2"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                />
              );
            }
            return null;
          })}

          {/* Venue Clusters */}
          {venues.map((venue, index) => (
            <g key={venue.id}>
              {/* Pulsing Ring */}
              <motion.circle
                cx={venue.x}
                cy={venue.y}
                r="3"
                fill="none"
                stroke={getClusterColor(venue.cluster)}
                strokeWidth="0.3"
                opacity="0.4"
                initial={{ r: 3, opacity: 0 }}
                animate={{
                  r: hoveredVenue === venue.id ? 6 : 3,
                  opacity: hoveredVenue === venue.id ? 0.6 : 0.4,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Star Cluster */}
              <motion.circle
                cx={venue.x}
                cy={venue.y}
                r="1.5"
                fill={getClusterColor(venue.cluster)}
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHoveredVenue(venue.id)}
                onMouseLeave={() => setHoveredVenue(null)}
                onClick={() => setSelectedVenue(venue)}
                style={{ cursor: 'pointer' }}
                whileHover={{ scale: 1.5 }}
              />

              {/* Orbit Ring on Hover */}
              {hoveredVenue === venue.id && (
                <motion.circle
                  cx={venue.x}
                  cy={venue.y}
                  r="4"
                  fill="none"
                  stroke={getClusterColor(venue.cluster)}
                  strokeWidth="0.15"
                  strokeDasharray="0.5 1"
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.8, rotate: 360 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
                    opacity: { duration: 0.3 },
                  }}
                />
              )}
            </g>
          ))}
        </svg>

        {/* Venue Labels */}
        {venues.map((venue, index) => (
          <motion.div
            key={`label-${venue.id}`}
            className="venue-label"
            style={{
              left: `${venue.x}%`,
              top: `${venue.y}%`,
              borderColor: getClusterColor(venue.cluster),
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15 + 0.3,
            }}
            onMouseEnter={() => setHoveredVenue(venue.id)}
            onMouseLeave={() => setHoveredVenue(null)}
            onClick={() => setSelectedVenue(venue)}
          >
            <span className="venue-name">{venue.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Info Panel */}
      {selectedVenue && (
        <motion.div
          className="venue-info-panel"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ type: 'spring', damping: 25 }}
          style={{ borderLeftColor: getClusterColor(selectedVenue.cluster) }}
        >
          <button
            className="close-panel"
            onClick={() => setSelectedVenue(null)}
          >
            ✕
          </button>

          <motion.h2
            className="venue-info-title"
            style={{ color: getClusterColor(selectedVenue.cluster) }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {selectedVenue.name}
          </motion.h2>

          <motion.p
            className="venue-info-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {selectedVenue.info}
          </motion.p>

          <motion.div
            className="venue-events-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3>Events at this venue:</h3>
            {selectedVenue.events.map((event, i) => (
              <motion.div
                key={i}
                className="event-tag"
                style={{
                  backgroundColor: getClusterColor(selectedVenue.cluster) + '20',
                  borderColor: getClusterColor(selectedVenue.cluster),
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                {event}
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="navigate-button"
            style={{ backgroundColor: getClusterColor(selectedVenue.cluster) }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Directions
          </motion.button>
        </motion.div>
      )}

      {/* Legend */}
      <motion.div
        className="map-legend"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <h3>Clusters</h3>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#ec4899' }}></span>
          <span>Alpha - Performance Zones</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#8b5cf6' }}></span>
          <span>Beta - Technical Hubs</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#06b6d4' }}></span>
          <span>Gamma - Creative Spaces</span>
        </div>
      </motion.div>
    </div>
  );
};

export default SpaceMap;
