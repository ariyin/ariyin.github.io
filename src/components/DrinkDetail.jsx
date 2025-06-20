import React from "react";
import { Chip } from "@mui/material";
import { DialogTitle, DialogDescription } from "../components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { formatDate } from "./utils";
import torohead from "../assets/icons/torohead.svg";
import stamp from "../assets/stamp.png";

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
      <div className="flex h-full gap-2 bg-white drop-shadow-(--default)">
        <img
          src={image}
          className={`ni-bg-${rating} w-1/2 object-cover`}
          alt={`${drink} image`}
        />
        <div className="flex basis-1/2 flex-col gap-2.5 bg-white p-10">
          <h2 className="m-0 text-center text-xl">{drink}</h2>
          <div className="flex items-center justify-between">
            <div>
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
          <p className="no-scrollbar mt-3 overflow-scroll">{review}</p>
        </div>
      </div>
    </>
  );
}
