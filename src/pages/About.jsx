import React from "react";
import useTitle from "../components/useTitle";
import "./About.css";
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
      <div className="bg-text">
        <p className="bg-text-top">井上</p>
        <p className="bg-text-bottom">トロ</p>
      </div>
      <div className="flex-box">
        <div className="box">
          <h1>about me</h1>
          <h3>hello!</h3>
          <p
            style={{
              marginTop: "15px",
              marginBottom: "25px",
              maxWidth: "600px",
            }}
          >
            i'm a third year cs major at ucla, interested in full stack (mostly
            front-end), ui/ux, and ui development! in my spare time, i enjoy
            playing video games, reading manhwas and novels, and exploring
            different albums.
          </p>
          <div className="icon-text" style={{ maxWidth: 600 }}>
            <span style={{ gap: 15 }}>
              <img className="icon-shadow" alt="music icon" src={music} />
              <h3 className="flex-music">
                last played: &nbsp;
                <LastFmSong
                  username={import.meta.env.VITE_LASTFM_USERNAME}
                  apiKey={import.meta.env.VITE_LASTFM_API_KEY}
                />
              </h3>
            </span>
          </div>
          <h1 style={{ marginTop: "50px" }}>contact</h1>
          <div className="icon-text" style={{ marginBottom: "15px" }}>
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
          <div className="icon-text" style={{ marginBottom: "15px" }}>
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
        <div className="box-2">
          <div className="dialogue">
            <div className="bubble">
              <img
                src={bubble}
                className="drop-shadow"
                width="350"
                draggable="false"
              />
              <div className="flex-dialogue">
                <LastFmArtist
                  username={import.meta.env.VITE_LASTFM_USERNAME}
                  apiKey={import.meta.env.VITE_LASTFM_API_KEY}
                />
              </div>
            </div>
            <img
              id="newspaper"
              alt="toro reading newspaper"
              src={newspaper}
              draggable="false"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
