import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contacts';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/Skills';
import './index.css';
import Scene from './scenes/scenes';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Scene />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
