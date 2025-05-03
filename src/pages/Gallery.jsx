import React, { useEffect } from "react";
import useTitle from "../components/useTitle";
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
import shells from "../assets/gallery/shells.png";
import hummingbird from "../assets/gallery/hummingbird.png";
import unknownfruit from "../assets/gallery/unknownfruit.png";
import cupofgrapesandpear from "../assets/gallery/cupofgrapesandpear.png";
import banana from "../assets/gallery/banana.png";
import parakeet from "../assets/gallery/parakeet.png";
import cloth from "../assets/gallery/cloth.png";
import someone from "../assets/gallery/someone.png";

const images = [
  {
    title: "hand, 2024",
    src: hand,
    aspectRatio: 7 / 10,
  },
  {
    title: "yellow lily, 2022",
    src: lily,
    aspectRatio: 29 / 23,
  },
  {
    title: "powell cat, 2022",
    src: powell,
    aspectRatio: 2 / 3,
  },
  {
    title: "osial, 2021",
    src: osial,
    aspectRatio: 58 / 41,
  },
  {
    title: "xiao, 2021",
    src: xiao,
    aspectRatio: 58 / 41,
  },
  {
    title: "someone, 2019",
    src: someone,
    aspectRatio: 4 / 3,
  },
  {
    title: "blue rose, 2019",
    src: bluerose,
    aspectRatio: 7 / 10,
  },
  {
    title: "monet study, 2019",
    src: monet,
    aspectRatio: 27 / 20,
  },
  {
    title: "hummingbird, 2018",
    src: hummingbird,
    aspectRatio: 47 / 38,
  },
  {
    title: "cloth, 2018",
    src: cloth,
    aspectRatio: 27 / 23,
  },
  {
    title: "roses, 2018",
    src: rose,
    aspectRatio: 53 / 40,
  },
  {
    title: "forgotten fruit, 2017",
    src: unknownfruit,
    aspectRatio: 46 / 43,
  },
  {
    title: "parakeet, 2017",
    src: parakeet,
    aspectRatio: 57 / 46,
  },
  {
    title: "willow, 2017",
    src: willow,
    aspectRatio: 53 / 39,
  },
  {
    title: "banana, 2017",
    src: banana,
    aspectRatio: 18 / 13,
  },
  {
    title: "shells, 2017",
    src: shells,
    aspectRatio: 65 / 42,
  },
  {
    title: "vivid, 2017",
    src: vivid,
    aspectRatio: 45 / 34,
  },
  {
    title: "still life, 2017",
    src: cupofgrapesandpear,
    aspectRatio: 53 / 42,
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
      <div className="mb-14">
        <h1>gallery</h1>
        <p>a collection of my works over the years!</p>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-image" data-aos="fade-in" key={index}>
            <AsyncImage
              src={image.src}
              className="gallery-async-image pointer-events-none mb-2.5 h-auto w-lg"
              style={{
                aspectRatio: `${image.aspectRatio}`,
              }}
              loader={<div className="bg-(--ti-beige)" />}
            />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
