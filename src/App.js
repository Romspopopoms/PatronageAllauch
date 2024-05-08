import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Activités from './pages/Activités';
import Quisommesnous from './pages/Quisommesnous';
import Recrutement from './pages/Recrutement';
import ContactPage from './pages/Contact';
import { Analytics } from "@vercel/analytics/react"

// Composant pour gérer le défilement en haut de page à chaque changement de route
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col w-auto h-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="activites" element={<Activités />} />
          <Route path="Quisommesnous" element={<Quisommesnous />} />
          <Route path="recrutement" element={<Recrutement />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
