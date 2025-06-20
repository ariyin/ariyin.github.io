import React, { useState, useEffect } from "react";
import useTitle from "../components/useTitle";
import Drink from "../components/Drink";
import DrinkDetail from "../components/DrinkDetail";
import { Dialog, DialogContent } from "../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import noimage from "../assets/noimage.png";

function Cafe() {
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [sortOption, setSortOption] = useState("date_desc");
  const [currentDrinkIndex, setCurrentDrinkIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const RANGE = "ratings!A2:J";
  useTitle("cafe - ");

  // get unique locations from entries
  const locations = ["all", ...new Set(entries.map((entry) => entry.location))];
  const ratings = ["all", "5", "4", "3", "2", "1"];

  const sortOptions = [
    { value: "date_desc", label: "date: recent to old" },
    { value: "date_asc", label: "date: old to recent" },
    { value: "price_asc", label: "price: low to high" },
    { value: "price_desc", label: "price: high to low" },
    { value: "rating_asc", label: "rating: low to high" },
    { value: "rating_desc", label: "rating: high to low" },
  ];

  // sort entries based on selected option
  const sortEntries = (entries) => {
    const [field, direction] = sortOption.split("_");

    return [...entries].sort((a, b) => {
      let comparison = 0;

      switch (field) {
        case "date":
          // convert dates to timestamps for comparison
          const dateA = new Date(a.date.split("/").join("-"));
          const dateB = new Date(b.date.split("/").join("-"));
          comparison = dateA - dateB;
          break;
        case "price":
          // remove $ and convert to number
          comparison =
            parseFloat(a.price.replace("$", "")) -
            parseFloat(b.price.replace("$", ""));
          break;
        case "rating":
          comparison = Number(a.rating) - Number(b.rating);
          break;
        default:
          comparison = 0;
      }

      return direction === "desc" ? -comparison : comparison;
    });
  };

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_GOOGLE_SHEET_ID}/values/${RANGE}?key=${import.meta.env.VITE_GOOGLE_API_KEY}`,
        );
        const json = await res.json();

        // don't update state if this effect has been cleaned up
        if (ignore) return;

        const rows = json.values || [];
        const data = rows
          .map((row) => ({
            date: row[0],
            cafe: row[1],
            location: row[2],
            drink: row[3],
            price: row[4],
            rating: row[7],
            review: row[8],
            image: row[9] || noimage,
          }))
          .reverse();

        setEntries(data);
        setFilteredEntries(sortEntries(data));
      } catch (error) {
        // don't update state if this effect has been cleaned up
        if (ignore) return;
        console.error("Error fetching data from Google Sheets:", error);
      }
    };

    fetchData();

    // cleanup function to prevent stale data from affecting state
    return () => {
      ignore = true;
    };
  }, []);

  // apply filters and sorting whenever dependencies change
  useEffect(() => {
    let filtered = [...entries];

    if (selectedLocation !== "all") {
      filtered = filtered.filter(
        (entry) => entry.location === selectedLocation,
      );
    }

    if (selectedRating !== "all") {
      filtered = filtered.filter((entry) => entry.rating === selectedRating);
    }

    setFilteredEntries(sortEntries(filtered));
  }, [entries, selectedLocation, selectedRating, sortOption]);

  const handleNavigate = (direction) => {
    if (direction === "prev") {
      setCurrentDrinkIndex((prev) =>
        prev > 0 ? prev - 1 : filteredEntries.length - 1,
      );
    } else {
      setCurrentDrinkIndex((prev) =>
        prev < filteredEntries.length - 1 ? prev + 1 : 0,
      );
    }
  };

  return (
    <div className="relative flex w-screen flex-col gap-10 px-24 pt-36 pb-24 max-md:px-8">
      <div>
        <h1>cafe</h1>
        <p>
          all the drinks from cafes i've tried and my review on them as someone
          who prefers a minimum amount of sweetness :3
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          {/* === FILTER LOCATION === */}
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger>
              <SelectValue placeholder="select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location === "all" ? "all locations" : location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {/* === FILTER RATING === */}
          <Select value={selectedRating} onValueChange={setSelectedRating}>
            <SelectTrigger>
              <SelectValue placeholder="select rating" />
            </SelectTrigger>
            <SelectContent>
              {ratings.map((rating) => (
                <SelectItem key={rating} value={rating}>
                  {rating === "all"
                    ? "all ratings"
                    : `${rating} toro${rating > 1 ? "s" : ""}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {/* === SORT === */}
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger>
              <SelectValue placeholder="sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <p className="bg-ti-beige border-ti-brown rounded-md border-2 px-3 py-1.5 text-sm">
          {filteredEntries.length} drink
          {filteredEntries.length !== 1 ? "s" : ""}
        </p>
      </div>
      <div className="grid grid-cols-[repeat(3,_1fr)] gap-14 max-xl:grid-cols-[repeat(2,_1fr)] max-lg:hidden">
        {filteredEntries.map((drink, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentDrinkIndex(index);
              setIsDialogOpen(true);
            }}
          >
            <Drink {...drink} />
          </div>
        ))}
        <Dialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          className="w-3/4"
        >
          <DialogContent
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <button
              onClick={() => handleNavigate("prev")}
              className="absolute top-1/2 -left-10 z-20 -translate-y-1/2 rounded-full bg-white p-1"
              aria-label="previous drink"
            >
              <ChevronLeft className="text-ti-brown size-4" />
            </button>
            <button
              onClick={() => handleNavigate("next")}
              className="absolute top-1/2 -right-10 z-20 -translate-y-1/2 rounded-full bg-white p-1"
              aria-label="next drink"
            >
              <ChevronRight className="text-ti-brown size-4" />
            </button>
            <DrinkDetail {...filteredEntries[currentDrinkIndex]} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-[auto] gap-14 lg:hidden">
        {filteredEntries.map((drink, index) => (
          <Drink key={index} {...drink} />
        ))}
      </div>
    </div>
  );
}

export default Cafe;
