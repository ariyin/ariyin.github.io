import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}jenna wang`;
  }, []);
};

export default useTitle;
