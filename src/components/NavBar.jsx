import DateTime from "./DateTime";
import BGM from "./BGM";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import border from "../assets/border.svg";
import home from "../assets/icons/home.svg";
import homefilled from "../assets/icons/home-filled.svg";
import about from "../assets/icons/about.svg";
import aboutfilled from "../assets/icons/about-filled.svg";
import projects from "../assets/icons/projects.svg";
import projectsfilled from "../assets/icons/projects-filled.svg";
import gallery from "../assets/icons/gallery.svg";
import galleryfilled from "../assets/icons/gallery-filled.svg";
import cafe from "../assets/icons/cafe.svg";
import cafefilled from "../assets/icons/cafefilled.svg";
import resume from "../assets/icons/resume.svg";
import network from "../assets/icons/online.svg";
import battery from "../assets/icons/battery.svg";

export default function NavBar() {
  const location = useLocation();
  const [homeIcon, setHomeIcon] = useState(home);
  const [aboutIcon, setAboutIcon] = useState(about);
  const [projectsIcon, setProjectsIcon] = useState(projects);
  const [galleryIcon, setGalleryIcon] = useState(gallery);
  const [cafeIcon, setCafeIcon] = useState(cafe);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setHomeIcon(homefilled);
        setAboutIcon(about);
        setProjectsIcon(projects);
        setGalleryIcon(gallery);
        setCafeIcon(cafe);
        break;
      case "/about":
        setHomeIcon(home);
        setAboutIcon(aboutfilled);
        setProjectsIcon(projects);
        setGalleryIcon(gallery);
        setCafeIcon(cafe);
        break;
      case "/projects":
        setHomeIcon(home);
        setAboutIcon(about);
        setProjectsIcon(projectsfilled);
        setGalleryIcon(gallery);
        setCafeIcon(cafe);
        break;
      case "/gallery":
        setHomeIcon(home);
        setAboutIcon(about);
        setProjectsIcon(projects);
        setGalleryIcon(galleryfilled);
        setCafeIcon(cafe);
        break;
      case "/cafe":
        setHomeIcon(home);
        setAboutIcon(about);
        setProjectsIcon(projects);
        setGalleryIcon(gallery);
        setCafeIcon(cafefilled);
        break;
      default:
        setHomeIcon(home);
        setAboutIcon(about);
        setProjectsIcon(projects);
        setGalleryIcon(gallery);
        setCafeIcon(cafe);
    }
  }, [location.pathname]);

  return (
    <>
      <img
        className="pointer-events-none fixed top-0 z-20 w-screen max-w-none rotate-180 drop-shadow-(--border) select-none max-xl:h-36 max-xl:w-auto"
        alt="top border"
        src={border}
      />
      <div className="navigation font-fakt fixed z-20 flex w-full items-center justify-between pt-6 text-center font-semibold text-(--ti-brown) max-xl:justify-center">
        {/* === LEFT ITEMS === */}
        <span className="flex items-center gap-5 pl-12 max-xl:hidden">
          <img className="icon" alt="network icon" src={network} />
          <span className="h-7 w-36 rounded-lg bg-(--ti-brown)">
            <p className="text-white">Internet</p>
          </span>
        </span>
        {/* === WEB NAVBAR === */}
        <div className="absolute left-1/2 -translate-x-1/2 max-xl:pt-8">
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
          <NavLink to="/cafe" className="underline">
            cafe
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
        {/* === MOBILE NAVBAR === */}
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
          <NavLink to="/cafe" className="nav-icons">
            <img className="icon" alt="cafe icon" src={cafeIcon} />
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
        {/* === RIGHT ITEMS === */}
        <span className="flex items-center gap-5 pr-12 [word-spacing:0px] max-xl:hidden">
          <DateTime />
          <BGM />
          <img className="icon" alt="battery icon" src={battery} />
        </span>
      </div>
    </>
  );
}
