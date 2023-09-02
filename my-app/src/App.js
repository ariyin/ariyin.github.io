import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import border from './assets/border.png';

// npm install react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <> 
      <img id = "top-border" src = {border} />

      <div id = "navigation">
          <div class = "underline"> <Link to="/"> home </Link> </div>
          <div class = "underline"> <Link to="/about"> about </Link> </div>
          <div class = "underline"> <Link to="/projects"> projects </Link> </div>
          <div class = "underline"> <a href = "/Resume.pdf" target="_blank" rel="noopener noreferrer"> resume </a> </div>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

      <img id = "bottom-border" src = {border} />
    </>
  );
}

export default App;
