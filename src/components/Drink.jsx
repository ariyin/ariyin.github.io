import React from "react";
import { Chip } from "@mui/material";

export default function Drink({ drinkName, info }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h3>{drinkName}</h3>
        <p>{info.rating} ★</p>
      </div>
      <div className="flex gap-2">
        <Chip
          label={info.date}
          style={{
            backgroundColor: "var(--ti-brown)",
            borderRadius: "10px",
          }}
        />
        <Chip
          label={info.price}
          style={{
            backgroundColor: "var(--ti-brown)",
            borderRadius: "10px",
          }}
        />
        <Chip
          label={`${info.pricePerOz} / oz`}
          style={{
            backgroundColor: "var(--ti-brown)",
            borderRadius: "10px",
          }}
        />
      </div>
      <p className="mt-2">{info.review}</p>
    </div>
  );
}
