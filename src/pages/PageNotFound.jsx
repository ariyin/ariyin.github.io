import useTitle from "../components/useTitle";
import lost from "../assets/cat/lost.webp";
import { Link } from "react-router-dom";
import SpiralBackground from "../components/SpiralBackground";

function PageNotFound() {
  useTitle("404 - ");

  return (
    <>
      <SpiralBackground />
      <div className="h-screen w-screen px-24 pt-36 pb-24">
        <div className="flex h-full w-full flex-wrap content-center justify-center gap-20 max-lg:gap-10">
          <img className="z-10 h-64 max-lg:h-52" alt="toro lost" src={lost} />
          <div className="z-10 flex flex-col flex-wrap justify-center">
            <h1>page not found</h1>
            <p className="pnf-description">
              oh no! toro got a little lost, and it looks like you did too. this
              page doesn't seem to exist — how mysterious! maybe it wandered off
              somewhere, like a sleepy cat looking for a sunny spot. don't
              worry, let's head back together!
            </p>
            <Link to="/">
              <button className="my-5">back to home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
