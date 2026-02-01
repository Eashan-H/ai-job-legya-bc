import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/PassesPage.css';

const PassesPage = () => {
  const [selectedPass, setSelectedPass] = useState(null);

  const passes = [
    {
      id: 1,
      name: 'Star Gazer',
      price: '₹299',
      description: 'Entry to all public events and cultural shows',
      color: '#06b6d4',
      features: [
        'Access to all 3 days of events',
        'Entry to cultural performances',
        'Festival merchandise',
        'Basic parking',
      ],
      isPremium: false,
    },
    {
      id: 2,
      name: 'Cosmic Explorer',
      price: '₹699',
      description: 'VIP access with exclusive perks',
      color: '#9333ea',
      features: [
        'Everything in Star Gazer',
        'VIP seating for main events',
        'Meet & greet opportunities',
        'Exclusive cosmic t-shirt',
        'Premium parking',
        'Food & beverage vouchers',
      ],
      isPremium: true,
    },
    {
      id: 3,
      name: 'Galactic Elite',
      price: '₹1299',
      description: 'Ultimate experience with all privileges',
      color: '#ec4899',
      features: [
        'Everything in Cosmic Explorer',
        'Front-row access to all events',
        'VIP lounge access',
        'Exclusive artist meet & greet',
        'Premium merchandise bundle',
        'Unlimited food & beverage',
        'Personal event coordinator',
        'Premium parking with valet',
      ],
      isPremium: true,
    },
  ];

  return (
    <div className="passes-page">
      {/* Header */}
      <motion.section
        className="passes-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="passes-title">Festival Passes</h1>
        <p className="passes-subtitle">Choose your intergalactic journey</p>
      </motion.section>

      {/* Passes Grid */}
      <motion.section
        className="passes-grid-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="passes-grid">
          {passes.map((pass, index) => (
            <motion.div
              key={pass.id}
              className={`pass-card ${pass.isPremium ? 'premium' : ''}`}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedPass(selectedPass === pass.id ? null : pass.id)}
              style={{ borderColor: pass.color }}
            >
              {pass.isPremium && (
                <motion.div
                  className="premium-badge"
                  initial={{ rotate: -10, y: -20 }}
                  animate={{ rotate: 0, y: 0 }}
                  transition={{ type: 'spring', damping: 15 }}
                >
                  ✨ Premium
                </motion.div>
              )}

              <div className="pass-header" style={{ borderBottomColor: pass.color }}>
                <h2 className="pass-name" style={{ color: pass.color }}>
                  {pass.name}
                </h2>
                <p className="pass-price" style={{ color: pass.color }}>
                  {pass.price}
                </p>
                <p className="pass-description">{pass.description}</p>
              </div>

              <motion.div
                className="pass-features"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: selectedPass === pass.id ? 'auto' : 0,
                  opacity: selectedPass === pass.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <ul className="features-list">
                  {pass.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <span className="feature-icon">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.button
                className="purchase-button"
                style={{ backgroundColor: pass.color }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {pass.isPremium ? '🚀 Get Premium' : 'Get Pass'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="faq-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Can I upgrade my pass?</h3>
            <p>Yes! You can upgrade your pass anytime before the festival. Visit our help desk or contact support for seamless upgradation.</p>
          </div>
          <div className="faq-item">
            <h3>Is there a group discount?</h3>
            <p>Absolutely! Groups of 10 or more get a 15% discount on any pass tier. Contact us for group bookings.</p>
          </div>
          <div className="faq-item">
            <h3>Can I transfer my pass?</h3>
            <p>Passes are non-transferable but can be refunded up to 7 days before the festival with a small processing fee.</p>
          </div>
          <div className="faq-item">
            <h3>What if I have special access needs?</h3>
            <p>We provide accessibility accommodations for all participants. Contact our accessibility team for personalized assistance.</p>
          </div>
        </div>
      </motion.section>

      {/* Cosmic Background Elements */}
      <div className="cosmic-element cosmic-e1"></div>
      <div className="cosmic-element cosmic-e2"></div>
    </div>
  );
};

export default PassesPage;
