import React from 'react';
import './About.css';
import mail from '../assets/airplane.svg';
import linkedin from '../assets/world.svg';
import newspaper from '../assets/newspaper.png';
import music from '../assets/music.svg';
import { LastFmSong } from '../components/LastFmSong';

function About() {
    return (
        <div className = "flex-box">
            <div className = "box">
                <h1> about me </h1> 

                <h3> hello! </h3>

                <p style = {{marginTop: 15 + 'px', marginBottom: 25 + 'px', maxWidth: 600 + 'px'}}> i'm a second year cs major at ucla, interested in full stack (mostly front-end), ui/ux, and ui development! in my spare time, i enjoy playing video games, reading manhwas and novels, and exploring different kpop albums. </p>  

                <div className = "icon-text" style = {{ maxWidth: 600 }}> 
                    <span style = {{ gap: 15 }}>
                        <img className="icon-shadow" alt="mail icon" src={music} /> 
                        <h3 className = "flex-music"> last played: &nbsp; <span> <LastFmSong username = {'j00101010'} apiKey = {'2e9538854d56a1ff4ca740d44ce38ab7'} /> </span> </h3>
                    </span>
                </div>

                <h1 style = {{marginTop: 50 + 'px'}}> contact </h1>

                    <div className = "icon-text" style = {{marginBottom: 15 + 'px'}}> 
                        <span> 
                            <img className = "icon-shadow" alt = "mail icon" src = {mail} /> 
                            <a className = "underline-highlight" href = "mailto:jenna2004@gmail.com" target="_blank" rel="noopener noreferrer">
                                <p> jenna2004@gmail.com </p> 
                            </a>
                        </span>
                    </div>

                    <div className = "icon-text" style = {{marginBottom: 15 + 'px'}}> 
                        <span>
                            <img className = "icon-shadow" alt = "linkedin icon" src = {linkedin} /> 
                            <a className = "underline-highlight" href = "https://www.linkedin.com/in/jyw42/" target="_blank" rel="noopener noreferrer">
                                <p> in/jyw42 </p>
                            </a>
                        </span>
                    </div>
            </div>

            <img id = "newspaper" alt = "toro reading newspaper" src = {newspaper} />
        </div>
    )
}

export default About;