import React from "react";
import { AsyncImage } from "loadable-image";
import useTitle from "../components/useTitle";
import "./Home.css";
import toroinoue from "../assets/ti.png";
import border from "../assets/border.svg";

function Home() {
  useTitle("");

  return (
    <>
      <div className="squares">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="background-image">
        <AsyncImage
          src={toroinoue}
          style={{ width: "100%", height: "auto", aspectRatio: 177 / 40 }}
          loader={<div style={{ background: "var(--ti-bg)" }} />}
        />
      </div>
      <div className="home-text">
        <div id="name">
          jenna
          <br />
          <span id="name-w"> w </span> ang
        </div>
      </div>
      <img id="bottom-border" alt="bottom border" src={border} />
    </>
  );
}

export default Home;
