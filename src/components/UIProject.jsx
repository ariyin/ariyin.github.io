import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AsyncImage } from "loadable-image";
import pointer from "../assets/icons/pointer.svg";
import checkbox from "../assets/icons/checkbox.svg";
import checkedbox from "../assets/icons/checkedbox.svg";
import { useCheckbox } from "./utils";

export default function UIProject({
  name,
  description,
  image,
  bwimage,
  link,
  rotate,
  shift,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { isChecked, handleCheckboxClick } = useCheckbox(name);

  return (
    <div
      className="project"
      style={{ transform: `rotate(${rotate}deg) translateY(${shift}px)` }}
    >
      <div className="name-tag">
        <AsyncImage
          src={isChecked ? checkedbox : checkbox}
          className="checkbox"
          loader={<div className="bg-ti-yellow" />}
        />
        <h3 className="label">{name}</h3>
      </div>
      {isHovered && <img src={pointer} className="pointer" alt="" />}
      <div
        className="image-tag"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCheckboxClick}
      >
        <Link to={link}>
          <AsyncImage
            src={isChecked ? image : bwimage}
            className="project-image aspect-17/10 h-auto w-full"
            loader={<div className="bg-ti-beige" />}
          />
        </Link>
      </div>
      <p className="width-scale">{description}</p>
    </div>
  );
}
