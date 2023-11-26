import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
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

function App() {
  return (
    <Router basename = '/'> 
      <NavBar />
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
