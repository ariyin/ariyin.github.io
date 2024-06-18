import "./NavBar.css";
import DateTime from "./DateTime";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
  const [homeIcon, setHomeIcon] = useState();
  const [aboutIcon, setAboutIcon] = useState();
  const [projectsIcon, setProjectsIcon] = useState();

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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? setHomeIcon(homefilled) : setHomeIcon(home)
              }
            >
              <img className="icon" alt="home icon" src={homeIcon} />
            </NavLink>
          </div>
          <div className="nav-icons">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? setAboutIcon(aboutfilled) : setAboutIcon(about)
              }
            >
              <img className="icon" alt="about icon" src={aboutIcon} />
            </NavLink>
          </div>
          <div className="nav-icons">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? setProjectsIcon(projectsfilled)
                  : setProjectsIcon(projects)
              }
            >
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
          <img className="icon" alt="battery icon" src={battery} />
        </span>
      </div>
    </>
  );
}

export default NavBar;
