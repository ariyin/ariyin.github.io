import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chip } from "@mui/material";
import pointer from "../assets/pointer.svg";
import checkbox from "../assets/checkbox.svg";
import checkedbox from "../assets/checkedbox.svg";

export default function CodeProject({
  name,
  description,
  image,
  bwimage,
  link,
  skills,
  rotate,
  shift,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isChecked, setIsChecked] = useState();

  const handleCheckboxClick = () => {
    setIsChecked(true);
    localStorage.setItem(name, true);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem(name);
    if (storedValue === "true") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
      localStorage.setItem(name, false);
    }
  }, []);

  return (
    <div
      className="project"
      style={{ transform: `rotate(${rotate}deg) translateY(${shift}px)` }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={isChecked ? checkedbox : checkbox}
          className="checkbox"
          loading="lazy"
        />
        <h3 className="label">{name}</h3>
      </div>

      {isHovered && <img src={pointer} className="pointer" />}
      <div className="image-tag">
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className="image-frame"
        >
          <img
            className="project-image"
            src={isChecked ? image : bwimage}
            alt="project thumbnail"
            loading="lazy"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCheckboxClick}
          />
        </Link>
        <div className="skill">
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              style={{
                backgroundColor: "var(--ti-brown)",
                borderRadius: "10px",
              }}
            />
          ))}
        </div>
      </div>

      <p className="width-scale"> {description} </p>
    </div>
  );
}
