import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blue from './blue';
import Red from './red';
import Home from './home';
import About from './About';
import Contact from './Contact';

const MainContainer = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
