import { useState, useEffect } from "react";

export function useCheckbox(name) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(true);
    localStorage.setItem(name, "true");
  };

  useEffect(() => {
    const storedValue = localStorage.getItem(name);
    if (storedValue === "true") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
      localStorage.setItem(name, "false");
    }
  }, [name]);

  return { isChecked, handleCheckboxClick };
}

export function formatDate(rawDate) {
  const [month, day, year] = rawDate.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  return `${date
    .toLocaleString("en-US", { month: "short" })
    .toLowerCase()}. ${year}`;
}
