import React, { useState, useEffect, useRef } from "react";
import volumeon from "../assets/icons/volume-on.svg";
import volumeoff from "../assets/icons/volume-off.svg";
import bgm from "../assets/bgm.ogg";

export default function BGM() {
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
      alt={playing ? "volume on" : "volume off"}
      src={playing ? volumeon : volumeoff}
      className="icon cursor-pointer"
      style={{ pointerEvents: "visible" }}
    />
  );
}
