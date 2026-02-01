import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/CountdownTimer.css';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Festival date: March 20, 2026
      const targetDate = new Date('2026-03-20T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimerUnit = ({ value, label }) => (
    <motion.div
      className="timer-unit"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="timer-value"
        key={value}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <div className="timer-label">{label}</div>
    </motion.div>
  );

  return (
    <motion.div
      className="countdown-timer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <h3 className="timer-title">Festival Begins In</h3>
      <div className="timer-grid">
        <TimerUnit value={timeLeft.days} label="Days" />
        <TimerUnit value={timeLeft.hours} label="Hours" />
        <TimerUnit value={timeLeft.minutes} label="Minutes" />
        <TimerUnit value={timeLeft.seconds} label="Seconds" />
      </div>
      <p className="timer-subtitle">MERAZ 2026 • March 20 - March 22</p>
    </motion.div>
  );
};

export default CountdownTimer;
