import React, { useState, useEffect } from "react";

export const LastFmArtist = ({ username, apiKey }) => {
  const [data, updateData] = useState({});
  useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=${username}&api_key=${apiKey}&period=7day&limit=1&format=json`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("error");
      })
      .then((data) => updateData(data))
      .catch(() =>
        updateData({ error: "whoops! something went wrong with last.fm." })
      );
  }, []);

  const buildData = () => {
    const { error } = data;
    const artist = data?.topartists?.artist;

    if (error) {
      return <p style={{ fontSize: 20 }}> {error} </p>;
    }

    if (!artist) {
      return;
    }

    const [{ name: artistName } = {}] = artist;

    return (
      <>
        <p className="headliner">this week's headliner is... hmm...</p>
        <p className="action">
          <span style={{ fontWeight: 600 }}> {artistName.toLowerCase()}</span>!
          check them out!
        </p>
      </>
    );
  };

  return buildData();
};
