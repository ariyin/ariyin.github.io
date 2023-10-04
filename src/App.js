import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Portfolio from './pages/Portfolio';
import Vroomin from './pages/Vroomin';
import Kalbum from './pages/Kalbum';
import CreatorHub from './pages/CreatorHub';
import Kalah from './pages/Kalah';
import Olyverse from './pages/Olyverse';
import Loocator from './pages/Loocator';
import NamCap from './pages/NamCap';
import border from './assets/border.png';

// npm install react-router-dom
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"

function App() {
  return (
    <Router basename = '/'> 
      <img id = "top-border" alt = "top border" src = {border} />

      <div id = "navigation">
          <div class = "underline" style = {{ marginRight: 40 + 'px'}}> <NavLink to="/"> home </NavLink> </div>
          <div class = "underline" style = {{ marginRight: 40 + 'px'}}> <NavLink to="/about"> about </NavLink> </div>
          <div class = "underline" style = {{ marginRight: 40 + 'px'}}> <NavLink to="/projects"> projects </NavLink> </div>
          <div class = "underline"> <a href = "Wang_Jenna_Resume.pdf" target="_blank" rel="noopener noreferrer"> resume </a> </div>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/vroomin" element={<Vroomin />} />
          <Route path="/kalbum" element={<Kalbum />} />
          <Route path="/creatorhub" element={<CreatorHub />} />
          <Route path="/kalah" element={<Kalah />} />
          <Route path="/olyverse" element={<Olyverse />} />
          <Route path="/loocator" element={<Loocator />} />
          <Route path="/nam-cap" element={<NamCap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
