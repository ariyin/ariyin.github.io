import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chip } from "@mui/material";
import { AsyncImage } from "loadable-image";
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
      <div className="name-tag">
        <AsyncImage
          src={isChecked ? checkedbox : checkbox}
          className="checkbox"
          style={{ width: "30px", height: "auto", aspectRatio: 1 / 1 }}
          loader={<div style={{ background: "#f9f8cc" }} />}
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
          <AsyncImage
            src={isChecked ? image : bwimage}
            className="project-image"
            style={{ width: "100%", height: "auto", aspectRatio: 17 / 10 }}
            loader={<div style={{ background: "var(--ti-beige)" }} />}
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
