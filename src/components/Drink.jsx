import React, { useState } from "react";
import { Chip } from "@mui/material";
import { formatDate } from "./utils";
import pointer from "../assets/icons/pointer.svg";
import torohead from "../assets/icons/torohead.svg";
import stamp from "../assets/stamp.png";

export default function Drink({
  date,
  cafe,
  location,
  drink,
  price,
  rating,
  review,
  image,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="image-tag cursor-pointer bg-white text-left drop-shadow-(--default)"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <img
          src={pointer}
          className="absolute -top-7 -right-7 z-10 w-12 drop-shadow-(--default)"
          alt=""
        />
      )}
      <div className="flex flex-col gap-2 p-5">
        <div className="flex h-16 items-center justify-center">
          <h2 className="relative m-0 text-center text-lg leading-6 whitespace-pre-line">
            {drink}
          </h2>
        </div>
        <img
          src={image}
          className={`ni-bg-${rating} mb-4 h-56 rounded-xl object-cover`}
          alt={`${drink} image`}
        />
        <div className="flex h-max flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-3">
                {[...Array(Number(rating))].map((_, i) => (
                  <img
                    src={torohead}
                    key={i}
                    className="w-4"
                    alt={`${rating}/5 rating`}
                  />
                ))}
              </div>
              <h3>{cafe}</h3>
            </div>
            {Number(rating) === 5 && <img src={stamp} className="size-10" />}
          </div>
          <div className="flex gap-2">
            <Chip
              label={price}
              style={{
                backgroundColor: "var(--ti-brown)",
                borderRadius: "10px",
              }}
            />
            <Chip
              label={location}
              style={{
                backgroundColor: "var(--ti-brown)",
                borderRadius: "10px",
              }}
            />
            <Chip
              label={formatDate(date)}
              style={{
                backgroundColor: "var(--ti-brown)",
                borderRadius: "10px",
              }}
            />
          </div>
          <p className="lg:line-clamp-3">{review}</p>
        </div>
      </div>
    </div>
  );
}
