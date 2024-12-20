import React, { useEffect } from "react";
import "./Gallery.css";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
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
  },
  {
    title: "yellow lily, 2022",
    src: lily,
  },
  {
    title: "powell cat, 2022",
    src: powell,
  },
  {
    title: "osial, 2021",
    src: osial,
  },
  {
    title: "xiao, 2021",
    src: xiao,
  },
  {
    title: "blue rose, 2019",
    src: bluerose,
  },
  {
    title: "monet study, 2019",
    src: monet,
  },
  {
    title: "roses, 2018",
    src: rose,
  },
  {
    title: "willow",
    src: willow,
  },
  {
    title: "vivid",
    src: vivid,
  },
];

function Gallery() {
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
      <div style={{ marginBottom: 56 + "px" }}>
        <h1>gallery</h1>
        <p>a collection of my works over the years!</p>
      </div>
      <div className="gallery-background">
        <div className="gallery">
          {images.map((image) => (
            <div className="gallery-image" data-aos="fade-in">
              <img
                key={image.title}
                src={image.src}
                alt={image.title}
                loading="lazy"
              />
              <p>{image.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
