import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Vroomin from "./pages/Vroomin";
import CreatorHub from "./pages/CreatorHub";
import Olyverse from "./pages/Olyverse";

function App() {
  return (
    <Router basename="/">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/vroomin" element={<Vroomin />} />
        <Route path="/creatorhub" element={<CreatorHub />} />
        <Route path="/olyverse" element={<Olyverse />} />
      </Routes>
    </Router>
  );
}

export default App;
