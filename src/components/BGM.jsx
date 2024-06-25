import React, { useState, useEffect, useRef } from "react";
import volumeon from "../assets/volume-on.svg";
import volumeoff from "../assets/volume-off.svg";
import bgm from "../assets/bgm.ogg";

const BGM = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(bgm));

  useEffect(() => {
    audioRef.current.loop = true;
  }, []);

  const toggleAudio = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <img
      onClick={toggleAudio}
      className="icon"
      alt={playing ? "volume on" : "volume off"}
      src={playing ? volumeon : volumeoff}
      style={{ cursor: "pointer" }}
    />
  );
};

export default BGM;
