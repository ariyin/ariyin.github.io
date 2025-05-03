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
import gallery from "../assets/gallery.svg";
import galleryfilled from "../assets/gallery-filled.svg";
import resume from "../assets/resume.svg";
import network from "../assets/online.svg";
import battery from "../assets/battery.svg";

export default function NavBar() {
  const location = useLocation();
  const [homeIcon, setHomeIcon] = useState(home);
  const [aboutIcon, setAboutIcon] = useState(about);
  const [projectsIcon, setProjectsIcon] = useState(projects);
  const [galleryIcon, setGalleryIcon] = useState(gallery);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setHomeIcon(homefilled);
        setAboutIcon(about);
        setProjectsIcon(projects);
        setGalleryIcon(gallery);
        break;
      case "/about":
        setHomeIcon(home);
        setAboutIcon(aboutfilled);
        setProjectsIcon(projects);
        setGalleryIcon(gallery);
        break;
      case "/projects":
        setHomeIcon(home);
        setAboutIcon(about);
        setProjectsIcon(projectsfilled);
        setGalleryIcon(gallery);
        break;
      case "/gallery":
        setHomeIcon(home);
        setAboutIcon(about);
        setProjectsIcon(projects);
        setGalleryIcon(galleryfilled);
        break;
      default:
        setHomeIcon(home);
        setAboutIcon(about);
        setProjectsIcon(projects);
        setGalleryIcon(gallery);
    }
  }, [location.pathname]);

  return (
    <>
      <img
        className="pointer-events-none fixed top-0 z-20 w-screen max-w-none rotate-180 drop-shadow-(--ds) select-none max-2xl:h-[140px] max-2xl:w-auto"
        alt="top border"
        src={border}
      />
      <div className="navigation font-fakt fixed z-20 flex w-full items-center justify-between pt-6 text-center font-semibold text-(--ti-brown) max-xl:justify-center">
        {/* LEFT ITEMS */}
        <span className="flex items-center gap-5 pl-12 max-xl:hidden">
          <img className="icon" alt="network icon" src={network} />
          <span className="h-7 w-36 rounded-lg bg-(--ti-brown)">
            <p className="text-white">Internet</p>
          </span>
        </span>
        {/* WEB NAVBAR */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <NavLink to="/" className="underline">
            home
          </NavLink>
          <NavLink to="/about" className="underline">
            about
          </NavLink>
          <NavLink to="/projects" className="underline">
            projects
          </NavLink>
          <NavLink to="/gallery" className="underline">
            gallery
          </NavLink>
          <a
            href="https://drive.google.com/drive/folders/1SaSxOoUAGhTMfW6iIWo1fop8Vn0M-5jj?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            resume
          </a>
        </div>
        {/* MOBILE NAVBAR */}
        <div>
          <NavLink to="/" className="nav-icons">
            <img className="icon" alt="home icon" src={homeIcon} />
          </NavLink>
          <NavLink to="/about" className="nav-icons">
            <img className="icon" alt="about icon" src={aboutIcon} />
          </NavLink>
          <NavLink to="/projects" className="nav-icons">
            <img className="icon" alt="projects icon" src={projectsIcon} />
          </NavLink>
          <NavLink to="/gallery" className="nav-icons">
            <img className="icon" alt="gallery icon" src={galleryIcon} />
          </NavLink>
          <a
            href="https://drive.google.com/drive/folders/1SaSxOoUAGhTMfW6iIWo1fop8Vn0M-5jj?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icons"
          >
            <img className="icon" alt="resume icon" src={resume} />
          </a>
        </div>
        {/* RIGHT ITEMS */}
        <span className="flex items-center gap-5 pr-12 [word-spacing:0px] max-xl:hidden">
          <DateTime />
          <BGM />
          <img className="icon" alt="battery icon" src={battery} />
        </span>
      </div>
    </>
  );
}
