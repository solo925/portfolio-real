import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import CV from "./components/cv";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProjectDetail from "./components/ProjectDetails";
import Projects from "./components/projects";
import './index.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  </Router>
);

export default App;
