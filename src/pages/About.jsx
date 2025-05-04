import React from "react";
import useTitle from "../components/useTitle";
import mail from "../assets/airplane.svg";
import clinkedin from "../assets/clinkedin.svg";
import newspaper from "../assets/newspaper.png";
import music from "../assets/music.svg";
import bubble from "../assets/bubble.svg";
import LastFmSong from "../components/LastFmSong.jsx";
import LastFmArtist from "../components/LastFmArtist.jsx";

function About() {
  useTitle("about - ");

  return (
    <>
      <div className="absolute right-12 flex h-screen flex-col items-end justify-center select-none max-xl:hidden">
        <p className="mt-20 mr-44 -mb-7 text-[14vw] font-semibold text-(--ti-beige)">
          井上
        </p>
        <p className="text-[14vw] font-semibold text-(--ti-beige)">トロ</p>
      </div>
      <div className="flex h-screen flex-wrap items-center justify-between max-md:justify-center">
        <div className="relative px-24 pt-36 pb-24 max-md:px-12">
          <h1>about me</h1>
          <div className="my-2 flex flex-col gap-2">
            <h3>hello!</h3>
            <p className="max-w-xl">
              i'm a third year cs major at ucla, interested in full-stack
              (mostly frontend) and ui/ux! in my spare time, i enjoy playing
              overwatch, reading manhwas and novels, listening to new songs, and
              visiting new cafes.
            </p>
            <div className="icon-text max-w-xl">
              <span className="gap-3">
                <img className="icon-shadow" alt="music icon" src={music} />
                <h3 className="flex flex-wrap">
                  last played: &nbsp;
                  <LastFmSong
                    username={import.meta.env.VITE_LASTFM_USERNAME}
                    apiKey={import.meta.env.VITE_LASTFM_API_KEY}
                  />
                </h3>
              </span>
            </div>
          </div>
          <h1 className="mt-10 mb-2">contact</h1>
          <div className="icon-text mb-4">
            <span>
              <img className="icon-shadow" alt="mail icon" src={mail} />
              <a
                className="underline-highlight"
                href="mailto:jenna2004@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>jenna2004@gmail.com</p>
              </a>
            </span>
          </div>
          <div className="icon-text mb-4">
            <span>
              <img
                className="icon-shadow"
                alt="linkedin icon"
                src={clinkedin}
              />
              <a
                className="underline-highlight"
                href="https://www.linkedin.com/in/jyw42/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>in/jyw42</p>
              </a>
            </span>
          </div>
        </div>
        <div className="mx-24 my-0">
          <div className="flex max-w-[300px] flex-col items-center">
            <div className="bubble">
              <img
                src={bubble}
                className="max-w-none drop-shadow-(--default)"
                width={350}
                draggable="false"
              />
              <div className="absolute top-6 left-5 flex max-w-[310px] flex-wrap">
                <LastFmArtist
                  username={import.meta.env.VITE_LASTFM_USERNAME}
                  apiKey={import.meta.env.VITE_LASTFM_API_KEY}
                />
              </div>
            </div>
            <img
              alt="toro reading newspaper"
              src={newspaper}
              draggable="false"
              className="z-10 mx-24 w-64 max-w-full max-xl:mb-24"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
