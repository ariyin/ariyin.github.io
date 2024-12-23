import useTitle from "../components/useTitle";
import lost from "../assets/ti_lost.webp";
import { Link } from "react-router-dom";

function PageNotFound() {
  useTitle("404 - ");

  return (
    <div className="pnf-flex-box">
      <img src={lost} width="150px" className="pnf-box-2" />
      <div className="pnf-box-2">
        <h1>page not found</h1>
        <p className="pnf-description">
          oh no! toro got a little lost, and it looks like you did too. this
          page doesn't seem to exist — how mysterious! maybe it wandered off
          somewhere, like a sleepy cat looking for a sunny spot. don't worry,
          let's head back together!
        </p>
        <Link to="/">
          <button style={{ marginTop: "20px" }}>back to home</button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
