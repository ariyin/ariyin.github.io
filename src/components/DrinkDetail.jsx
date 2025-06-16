import React from "react";
import { Chip } from "@mui/material";
import { DialogTitle, DialogDescription } from "../components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import torohead from "../assets/icons/torohead.svg";

export default function DrinkDetail({
  date,
  cafe,
  location,
  drink,
  price,
  rating,
  review,
  image,
}) {
  return (
    <>
      <VisuallyHidden>
        <DialogTitle>
          {drink} at {cafe} in {location} rated {rating}
        </DialogTitle>
        <DialogDescription>
          visited {date}, paid {price}, review: {review}
        </DialogDescription>
      </VisuallyHidden>
      <div className="flex h-full w-auto gap-2 bg-white drop-shadow-(--default)">
        <img
          src={image}
          className={`ni-bg-${rating} h-full basis-1/2 object-cover`}
          alt={`${drink} image`}
        />
        <div className="flex basis-1/2 flex-col gap-2.5 bg-white p-10">
          <h2 className="m-0 text-center text-xl">{drink}</h2>
          <div className="mt-2 flex gap-3">
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
              label={date}
              style={{
                backgroundColor: "var(--ti-brown)",
                borderRadius: "10px",
              }}
            />
          </div>
          <p className="no-scrollbar mt-3 overflow-scroll">{review}</p>
        </div>
      </div>
    </>
  );
}
