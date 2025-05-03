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
          loader={<div className="bg-(--ti-bg)" />}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="name text-center text-[6.5vw] leading-[normal] font-normal text-(--ti-brown) not-italic select-none max-md:text-[80px]">
          jenna
          <br />
          <span className="tracking-[-1.5vw] select-none max-md:tracking-[-20px]">
            {" "}
            w{" "}
          </span>{" "}
          ang
        </div>
      </div>
      <img
        className="pointer-events-none fixed bottom-0 w-screen max-w-none drop-shadow-(--ds) select-none max-2xl:h-[140px] max-2xl:w-auto"
        alt="bottom border"
        src={border}
      />
    </>
  );
}

export default Home;
