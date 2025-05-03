import React, { useState, useEffect } from "react";

export default function LastFmSong({ username, apiKey }) {
  const [data, updateData] = useState({});
  useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`,
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("error");
      })
      .then((data) => updateData(data))
      .catch(() =>
        updateData({ error: "whoops! something went wrong with last.fm." }),
      );
  }, []);

  const buildData = () => {
    const { error } = data;
    const track = data?.recenttracks?.track;

    if (error) {
      return <p className="font-normal"> {error} </p>;
    }

    if (!track) {
      return <p className="font-normal"> loading... </p>;
    }

    const [{ name: songName, artist: { "#text": artistName } = {}, url } = {}] =
      track;

    return (
      <a
        className="underline-highlight"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="z-0 font-normal">
          {songName.toLowerCase()} - {artistName.toLowerCase()}
        </p>
      </a>
    );
  };

  return buildData();
}
