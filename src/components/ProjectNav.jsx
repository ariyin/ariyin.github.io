import { useNavigate } from "react-router-dom";

export default function ProjectNav({
  previous,
  previousName,
  previousLink,
  next,
  nextName,
  nextLink,
}) {
  const navigate = useNavigate();

  const handlePreviousNavigation = () => {
    localStorage.setItem(previousName, true);
    navigate(previousLink);
  };

  const handleNextNavigation = () => {
    localStorage.setItem(nextName, true);
    navigate(nextLink);
  };

  return (
    <div className="relative flex w-full justify-between pt-12">
      {previous && (
        <div
          className="absolute left-0 flex cursor-pointer items-center gap-2.5"
          onClick={handlePreviousNavigation}
        >
          <p className="project-button">L1</p>
          <h3>{previousName}</h3>
        </div>
      )}
      {next && (
        <div
          className="absolute right-0 flex cursor-pointer items-center gap-2.5"
          onClick={handleNextNavigation}
        >
          <h3>{nextName}</h3>
          <p className="project-button">R1</p>
        </div>
      )}
    </div>
  );
}
