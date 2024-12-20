import React from "react";
import "./Home.css";
import toroinoue from "../assets/ti.svg";
import border from "../assets/border.svg";
// import name from "../assets/name.png";

function Home() {
  return (
    <>
      <div className="triangles">
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

      <img
        className="background-image"
        alt="toro emoticons"
        src={toroinoue}
        fetchpriority="high"
      />

      <div className="home-text">
        {/* <img src = {name} width = '500' /> */}
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
