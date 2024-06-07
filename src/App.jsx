import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MatchScedules from './components/MatchSchedules';
import PlayerProfiles from './components/PlayerProfiles';
import Statistics from './components/Statistics';
import NewsUpdates from './components/NewsUpdates';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FanEngagement from './components/FanEngagement';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<MatchScedules />} />
            <Route path="/players" element={<PlayerProfiles />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/news" element={<NewsUpdates />} />
            <Route path="/fan-engagement" element={<FanEngagement />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
          <Footer />
    </Router>
  );
}

export default App;
