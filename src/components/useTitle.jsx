import { useEffect } from "react";

export default function useTitle(title) {
  useEffect(() => {
    document.title = `${title}jenna wang`;
  }, []);
}
