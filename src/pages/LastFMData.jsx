import React, { useState, useEffect } from 'react';
import music from '../assets/music.svg';

export const LastFMData = ({ username, apiKey }) => {
    const [LFMData, updateLFMData] = useState({});
    useEffect(() => {
        fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('error');
            })
            .then(data => updateLFMData(data))
            .catch(() =>
                updateLFMData({ error: 'whoops! something went wrong with last.fm' })
            );
    }, []);

    const buildLastFMData = () => {
        const { error } = LFMData;
        const track = LFMData?.recenttracks?.track;

        if(error) {
            return <h3 style = {{ maxWidth: 600 + 'px'}}> ♪ my most recent listen: <span style = {{ fontWeight: '400'}}> {error} </span> </h3>
        }

        if(!track) {
            return <h3 style = {{ maxWidth: 600 + 'px'}}> ♪ my most recent listen: <span style = {{ fontWeight: '400'}}> loading... </span> </h3>;
        }

        const [
            { name: songName, artist: { '#text': artistName } = {} } = {}
        ] = track;

    //     <div className = "icon-text" style = {{marginBottom: 15 + 'px'}}> 
    //     <span> 
    //         <img className = "icon" alt = "mail icon" src = {mail} /> 
    //         <a className = "underline-highlight" href = "mailto:jenna2004@gmail.com" target="_blank" rel="noopener noreferrer">
    //             <p> jenna2004@gmail.com </p> 
    //         </a>
    //     </span>
    // </div>
    return <h3 className = "icon-text" style = {{ maxWidth: 600 + 'px'}}> 
        <span style = {{ gap: 8 }}>
            <img className = "icon" alt = "mail icon" src = {music} /> 
            my most recent listen: <span style = {{ fontWeight: '400'}}> {songName.toLowerCase()} - {artistName.toLowerCase()} </span> 
        </span>
    </h3>;

        // return <h3 style = {{ maxWidth: 600 + 'px'}}> <img className = "icon" alt = "mail icon" src = {music} /> my most recent listen: <span style = {{ fontWeight: '400'}}> {songName.toLowerCase()} - {artistName.toLowerCase()} </span> </h3>;
    };

    return buildLastFMData();
};