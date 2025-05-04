import React from "react";
import { AsyncImage } from "loadable-image";
import useTitle from "../components/useTitle";
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
          className="aspect-177/40 h-auto w-full"
          loader={<div className="bg-(--ti-bg)" />}
          src={toroinoue}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="font-gws text-center text-[6.5vw] leading-[normal] font-normal text-(--ti-brown) not-italic select-none max-lg:text-7xl">
          jenna
          <br />
          <span className="tracking-[-1.5vw] select-none max-lg:tracking-[-12px]">
            w
          </span>
          ang
        </div>
      </div>
      <img
        className="pointer-events-none fixed bottom-0 w-screen max-w-none drop-shadow-(--border) select-none max-xl:h-36 max-xl:w-auto"
        alt="bottom border"
        src={border}
      />
    </>
  );
}

export default Home;
