import React, { useEffect } from "react";
import useTitle from "../components/useTitle";
import "./Gallery.css";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import { AsyncImage } from "loadable-image";
import bluerose from "../assets/gallery/bluerose.png";
import hand from "../assets/gallery/hand.png";
import lily from "../assets/gallery/lily.png";
import monet from "../assets/gallery/monet.png";
import rose from "../assets/gallery/rose.png";
import osial from "../assets/gallery/osial.png";
import xiao from "../assets/gallery/xiao.png";
import powell from "../assets/gallery/powell.png";
import willow from "../assets/gallery/willow.png";
import vivid from "../assets/gallery/vivid.png";

const images = [
  {
    title: "hand, 2024",
    src: hand,
    aspectRatio: 7 / 10,
    width: 940,
    height: 1342,
  },
  {
    title: "yellow lily, 2022",
    src: lily,
    aspectRatio: 29 / 23,
    width: 1672,
    height: 1326,
  },
  {
    title: "powell cat, 2022",
    src: powell,
    aspectRatio: 2 / 3,
    width: 1200,
    height: 1800,
  },
  {
    title: "osial, 2021",
    src: osial,
    aspectRatio: 58 / 41,
    width: 3508,
    height: 2480,
  },
  {
    title: "xiao, 2021",
    src: xiao,
    aspectRatio: 58 / 41,
    width: 3508,
    height: 2480,
  },
  {
    title: "blue rose, 2019",
    src: bluerose,
    aspectRatio: 7 / 10,
    width: 890,
    height: 1274,
  },
  {
    title: "monet study, 2019",
    src: monet,
    aspectRatio: 27 / 20,
    width: 1674,
    height: 1240,
  },
  {
    title: "roses, 2018",
    src: rose,
    aspectRatio: 53 / 40,
    width: 1752,
    height: 1322,
  },
  {
    title: "willow",
    src: willow,
    aspectRatio: 53 / 39,
    width: 1734,
    height: 1276,
  },
  {
    title: "vivid",
    src: vivid,
    aspectRatio: 45 / 34,
    width: 1784,
    height: 1348,
  },
];

function Gallery() {
  useTitle("gallery - ");

  useEffect(() => {
    const grid = document.querySelector(".gallery");

    const masonry = new Masonry(grid, {
      itemSelector: ".gallery-image",
      gutter: 20,
      fitWidth: true,
    });

    imagesLoaded(grid).on("progress", () => {
      masonry.layout();
    });
  }, []);

  return (
    <div className="box">
      <div style={{ marginBottom: "56px" }}>
        <h1>gallery</h1>
        <p>a collection of my works over the years!</p>
      </div>
      <div className="gallery">
        {images.map((image) => (
          <div className="gallery-image" data-aos="fade-in">
            <AsyncImage
              src={image.src}
              style={{
                width: "500px",
                height: "auto",
                aspectRatio: `${image.aspectRatio}`,
                pointerEvents: "none",
                marginBottom: "10px",
              }}
              loader={<div style={{ background: "#888" }} />}
            />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
