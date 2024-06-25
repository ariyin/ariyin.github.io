import { useNavigate } from "react-router-dom";

const ProjectNav = ({
  previous,
  previousName,
  previousLink,
  next,
  nextName,
  nextLink,
}) => {
  const navigate = useNavigate();

  const handlePreviousNavigation = () => {
    navigate(previousLink);
  };

  const handleNextNavigation = () => {
    navigate(nextLink);
  };

  return (
    <div className="project-nav">
      {previous && (
        <div className="nav-left" onClick={handlePreviousNavigation}>
          <p className="project-button"> L1 </p>
          <h3> {previousName} </h3>
        </div>
      )}
      {next && (
        <div className="nav-right" onClick={handleNextNavigation}>
          <h3> {nextName} </h3>
          <p className="project-button"> R1 </p>
        </div>
      )}
    </div>
  );
};

export default ProjectNav;
