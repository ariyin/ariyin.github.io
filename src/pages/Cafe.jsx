import React, { useState, useEffect } from "react";
import useTitle from "../components/useTitle";
import Drink from "../components/Drink";
import DrinkDetail from "../components/DrinkDetail";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import noimage from "../assets/noimage.png";

function formatDate(rawDate) {
  const [month, day, year] = rawDate.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  return `${date
    .toLocaleString("en-US", { month: "short" })
    .toLowerCase()}. ${year}`;
}

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

        const data = rows
          .map((row) => ({
            date: formatDate(row[0]),
            cafe: row[1],
            location: row[2],
            drink: row[3],
            price: row[4],
            rating: row[7],
            review: row[8],
            image: row[9] || noimage,
          }))
          .reverse(); // temporary

        setEntries(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative w-screen px-24 pt-36 pb-24 max-md:px-12">
      <div className="mb-14">
        <h1>cafe</h1>
        <p>all the drinks and cafes i've tried and my review on them :3</p>
      </div>
      <div className="grid grid-cols-[repeat(3,_1fr)] gap-14 max-xl:grid-cols-[repeat(2,_1fr)] max-lg:hidden">
        {entries.map((drink, index) => (
          <Dialog>
            <DialogTrigger>
              <Drink key={index} {...drink} />
            </DialogTrigger>
            <DialogContent>
              <DrinkDetail key={index} {...drink} />
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <div className="grid grid-cols-[auto] gap-14 lg:hidden">
        {entries.map((drink, index) => (
          <Drink key={index} {...drink} />
        ))}
      </div>
    </div>
  );
}

export default Cafe;
