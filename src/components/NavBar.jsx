import "./NavBar.css";
import DateTime from "./DateTime";
import BGM from "./BGM";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import border from "../assets/border.svg";
import home from "../assets/home.svg";
import homefilled from "../assets/home-filled.svg";
import about from "../assets/about.svg";
import aboutfilled from "../assets/about-filled.svg";
import projects from "../assets/projects.svg";
import projectsfilled from "../assets/projects-filled.svg";
import resume from "../assets/resume.svg";
import network from "../assets/online.svg";
import battery from "../assets/battery.svg";

function NavBar() {
  const location = useLocation();
  const [homeIcon, setHomeIcon] = useState(home);
  const [aboutIcon, setAboutIcon] = useState(about);
  const [projectsIcon, setProjectsIcon] = useState(projects);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setHomeIcon(homefilled);
        setAboutIcon(about);
        setProjectsIcon(projects);
        break;
      case "/about":
        setHomeIcon(home);
        setAboutIcon(aboutfilled);
        setProjectsIcon(projects);
        break;
      case "/projects":
        setHomeIcon(home);
        setAboutIcon(about);
        setProjectsIcon(projectsfilled);
        break;
      default:
        setHomeIcon(home);
        setAboutIcon(about);
        setProjectsIcon(projects);
    }
  }, [location.pathname]);

  return (
    <>
      <img id="top-border" alt="top border" src={border} />

      <div id="navigation">
        <span className="flex-side" style={{ marginLeft: 50 }}>
          <img className="icon" alt="network icon" src={network} />
          <span id="internet-box">
            <p style={{ color: "white" }}> Internet </p>
          </span>
        </span>

        <div>
          <div className="underline" style={{ marginRight: 40 }}>
            <NavLink to="/"> home </NavLink>
          </div>
          <div className="underline" style={{ marginRight: 40 }}>
            <NavLink to="/about"> about </NavLink>
          </div>
          <div className="underline" style={{ marginRight: 40 }}>
            <NavLink to="/projects"> projects </NavLink>
          </div>
          <div className="underline">
            <a
              href="Wang_Jenna_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
          </div>

          <div className="nav-icons">
            <NavLink to="/">
              <img className="icon" alt="home icon" src={homeIcon} />
            </NavLink>
          </div>
          <div className="nav-icons">
            <NavLink to="/about">
              <img className="icon" alt="about icon" src={aboutIcon} />
            </NavLink>
          </div>
          <div className="nav-icons">
            <NavLink to="/projects">
              <img className="icon" alt="projects icon" src={projectsIcon} />
            </NavLink>
          </div>
          <div className="nav-icons">
            <a
              href="Wang_Jenna_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" alt="resume icon" src={resume} />
            </a>
          </div>
        </div>

        <span className="flex-side" style={{ marginRight: 50 }}>
          <DateTime />
          <BGM />
          <img className="icon" alt="battery icon" src={battery} />
        </span>
      </div>
    </>
  );
}

export default NavBar;
