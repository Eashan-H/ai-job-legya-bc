import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import SpaceMap from './components/SpaceMap';
import AboutPage from './components/AboutPage';
import PassesPage from './components/PassesPage';
import Navigation from './components/Navigation';
import StarField from './components/StarField';
import CursorTrail from './components/CursorTrail';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onShowContent={setShowContent} />;
      case 'events':
        return <EventsPage />;
      case 'map':
        return <SpaceMap />;
      default:
        return <HomePage onNavigate={setCurrentPage} onShowContent={setShowContent} />;
    }
  };

  return (
    <div className="app">
      <StarField />
      <CursorTrail />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} showContent={showContent} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="page-container"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
