import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom" // npm install react-router-dom

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

import DateTimeDisplay from './components/DateTimeDisplay';

import border from './assets/border.svg';
import home from './assets/home.svg';
import homefilled from './assets/home-filled.svg';
import about from './assets/about.svg';
import aboutfilled from './assets/about-filled.svg';
import projects from './assets/projects.svg';
import projectsfilled from './assets/projects-filled.svg';
import resume from './assets/resume.svg';
import network from './assets/network.svg';
import battery from './assets/battery.svg';

function App() {
  const [homeIcon, setHomeIcon] = useState();
  const [aboutIcon, setAboutIcon] = useState();
  const [projectsIcon, setProjectsIcon] = useState();

  return (
    <Router basename = '/'> 
      <img id = "top-border" alt = "top border" src = {border} />

      <div id = "navigation">
        <span className = "flex-side" style = {{ marginLeft: 50}}>
          <img className = "icon" alt = "network icon" src = {network} />
          <span id = "internet-box"> <p style = {{ color: "white" }}> Internet </p> </span>
        </span>

        <div>
          <div class = "underline" style = {{ marginRight: 40 }}> <NavLink to="/"> home </NavLink> </div>
          <div class = "underline" style = {{ marginRight: 40 }}> <NavLink to="/about"> about </NavLink> </div>
          <div class = "underline" style = {{ marginRight: 40 }}> <NavLink to="/projects"> projects </NavLink> </div>
          <div class = "underline"> <a href = "Wang_Jenna_Resume.pdf" target="_blank" rel="noopener noreferrer"> resume </a> </div>

          <div class = "nav-icons"> <NavLink to="/" className = {({ isActive }) => isActive ? (setHomeIcon(homefilled)) : (setHomeIcon(home))}> <img className = "icon" alt = "home icon" src = {homeIcon} /> </NavLink> </div>
          <div class = "nav-icons"> <NavLink to="/about" className = {({ isActive }) => isActive ? (setAboutIcon(aboutfilled)) : (setAboutIcon(about))}> <img className = "icon" alt = "about icon" src = {aboutIcon} /> </NavLink> </div>
          <div class = "nav-icons"> <NavLink to="/projects" className = {({ isActive }) => isActive ? (setProjectsIcon(projectsfilled)) : (setProjectsIcon(projects))}> <img className = "icon" alt = "projects icon" src = {projectsIcon} /> </NavLink> </div>
          <div class = "nav-icons"> <a href = "Wang_Jenna_Resume.pdf" target="_blank" rel="noopener noreferrer"> <img className = "icon" alt = "resume icon" src = {resume} /> </a> </div>
        </div>

        <span className = "flex-side" style = {{ marginRight: 50 }}>
          <DateTimeDisplay />
          <img className = "icon" alt = "battery icon" src = {battery} />
        </span>
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
