import React, { useState, useEffect } from "react";
import useTitle from "../components/useTitle";
import Masonry from "masonry-layout";
import Drink from "../components/Drink";
import { Chip } from "@mui/material";

function Cafe() {
  const [entries, setEntries] = useState([]);
  const RANGE = "ratings!A2:J";
  useTitle("cafe - ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_GOOGLE_SHEET_ID}/values/${RANGE}?key=${import.meta.env.VITE_GOOGLE_API_KEY}`,
        );
        const json = await res.json();
        const rows = json.values || [];
        const map = {}; // to process into proper format

        const data = rows.map((row) => ({
          date: row[0],
          cafe: row[1],
          location: row[2],
          drink: row[3],
          price: row[4],
          pricePerOz: row[6],
          rating: row[7],
          review: row[8],
          image: row[9],
        }));

        data.forEach(
          ({
            cafe,
            location,
            drink,
            price,
            pricePerOz,
            date,
            review,
            rating,
            image,
          }) => {
            // create new cafe
            if (!map[cafe]) {
              map[cafe] = {
                locations: new Set(),
                drinks: {},
                images: new Set(),
              };
            }

            // add location
            map[cafe].locations.add(location);

            // add image
            if (image) {
              map[cafe].images.add(image);
            }

            // add drink
            if (!map[cafe].drinks[drink]) {
              map[cafe].drinks[drink] = {
                price,
                pricePerOz,
                date,
                review,
                rating,
              };
            }
          },
        );

        // convert sets to arrays
        for (const cafe in map) {
          map[cafe].locations = Array.from(map[cafe].locations);
          map[cafe].images = Array.from(map[cafe].images);
        }

        setEntries(map);
      } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const grid = document.querySelector(".gallery");
    const masonry = new Masonry(grid, {
      itemSelector: ".gallery-image",
      gutter: 20,
      fitWidth: true,
    });
  }, [entries]);

  return (
    <div className="relative px-24 pt-36 pb-24 max-md:px-12">
      <div className="mb-14">
        <h1>cafe</h1>
        <p>an excuse to buy more drinks</p>
      </div>
      <div className="gallery">
        {Object.entries(entries).map(([cafeName, cafeData]) => (
          <div
            key={cafeName}
            className="gallery-image my-4 flex w-sm flex-col gap-5 bg-white p-8 drop-shadow-[var(--default)]"
          >
            <div>
              <h2 className="m-0 mb-2">{cafeName}</h2>
              {/* === LOCATIONS === */}
              {cafeData.locations.map((location, index) => (
                <Chip
                  key={index}
                  label={location}
                  style={{
                    backgroundColor: "var(--ti-brown)",
                    borderRadius: "10px",
                    width: "fit-content",
                  }}
                />
              ))}
            </div>
            {/* === DRINK COMPONENT === */}
            <div className="flex flex-wrap gap-8">
              {Object.entries(cafeData.drinks).map(([drinkName, drinkInfo]) => (
                <Drink
                  key={`${cafeName}-${drinkName}`}
                  drinkName={drinkName}
                  info={drinkInfo}
                />
              ))}
            </div>
            {/* === IMAGES === */}
            <div className="flex flex-col gap-3">
              {cafeData.images.map((image, index) => (
                <img key={index} src={image} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cafe;
