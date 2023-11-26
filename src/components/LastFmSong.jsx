import React, { useState, useEffect } from 'react';

export const LastFmSong = ({ username, apiKey }) => {
    const [data, updateData] = useState({});
    useEffect(() => {
        fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('error');
            })
            .then(data => updateData(data))
            .catch(() =>
                updateData({ error: 'whoops! something went wrong with last.fm' })
            );
    }, []);

    const buildData = () => {
        const { error } = data;
        const track = data?.recenttracks?.track;

        if(error) {
            return <p style={{ fontWeight: '400' }}> {error} </p>;
        }

        if(!track) {
            return <p style={{ fontWeight: '400' }}> loading... </p>;
        }

        const [{ name: songName, artist: { '#text': artistName } = {}, url } = {}] = track;

        return <a className = "underline-highlight" href = {url} target="_blank" rel="noopener noreferrer">
                    <p style={{ fontWeight: '400', zIndex: 0 }}> {songName.toLowerCase()} - {artistName.toLowerCase()} </p>
                </a>;
    };

    return buildData();
};