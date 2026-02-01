import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutPage.css';

const AboutPage = () => {
  const stats = [
    { label: 'Events', value: '20+' },
    { label: 'Participants', value: '5000+' },
    { label: 'Days', value: '3' },
    { label: 'Venues', value: '15+' },
  ];

  const values = [
    {
      icon: '🌌',
      title: 'Cosmic Fusion',
      description: 'Where cultures and ideas converge in harmony',
    },
    {
      icon: '⚡',
      title: 'Innovation',
      description: 'Pushing boundaries of art, tech, and culture',
    },
    {
      icon: '🌟',
      title: 'Inclusivity',
      description: 'A space for everyone across the galaxy',
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="about-title">About MERAZ 2026</h1>
          <p className="about-lead">
            An Intergalactic Cultural & Technical Festival
          </p>
          <p className="about-description">
            MERAZ 2026 is where cultures orbit. A revolutionary gathering of creative minds, technical innovators, and cultural enthusiasts from across the galaxy. We bring together art, technology, and culture in an immersive three-day experience that transcends boundaries.
          </p>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="stats-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="section-title">By The Numbers</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="mission-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="mission-content">
          <motion.div
            className="mission-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h2 className="section-title">Our Mission</h2>
            <p>
              At MERAZ, we believe in the power of bringing diverse communities together. Our mission is to create a platform where cultural expressions, technical innovations, and artistic visions collide and create magic.
            </p>
            <p>
              We celebrate the intergalactic spirit of human creativity, fostering connections that transcend geographical and cultural boundaries. Through three days of immersive experiences, we aim to inspire, innovate, and unite.
            </p>
          </motion.div>

          <motion.div
            className="values-grid"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="cta-content">
          <h2>Ready to Join the Intergalactic Journey?</h2>
          <p>Explore events, secure your passes, and become part of something extraordinary.</p>
          <button className="cta-button">Explore Events</button>
        </div>
      </motion.section>

      {/* Cosmic Background Elements */}
      <div className="cosmic-bg-element cosmic-1"></div>
      <div className="cosmic-bg-element cosmic-2"></div>
    </div>
  );
};

export default AboutPage;
