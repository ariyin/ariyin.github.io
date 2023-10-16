import React from 'react';
import mail from '../assets/mail.png';
import discord from '../assets/discord.png';
import linkedin from '../assets/linkedin.png';
import newspaper from '../assets/newspaper.png';
import { LastFMData } from './LastFMData';

function About() {
    return (
        <div className = "flex-box">
            <div className = "box">
                <h1> about me </h1> 

                <h3> hello! </h3>

                <p style = {{marginTop: 15 + 'px', marginBottom: 25 + 'px', maxWidth: 600 + 'px'}}> i’m a second year cs major at ucla, interested mostly in front-end and ui/ux! in my spare time, i enjoy playing video games, reading manhwas and novels, and exploring whatever my latest interest might be. </p>  

                <LastFMData
                    username = {'j00101010'}
                    apiKey = {'2e9538854d56a1ff4ca740d44ce38ab7'}
                />

                <h1 style = {{marginTop: 30 + 'px'}}> contact </h1>

                <div className = "icon-text" style = {{marginBottom: 15 + 'px'}}> 
                    <a href = "mailto:jenna2004@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img className = "icon" alt = "mail icon" src = {mail} /> 
                    </a>
                    <p> jenna2004@gmail.com </p>
                </div>

                <div className = "icon-text" style = {{marginBottom: 15 + 'px'}}> 
                    <img className = "icon" alt = "discord icon" src = {discord} /> 
                    <p> jayenay </p>
                </div>

                <div className = "icon-text"> 
                    <a href = "https://www.linkedin.com/in/jyw42/" target="_blank" rel="noopener noreferrer">
                        <img className = "icon" alt = "linkedin icon" src = {linkedin} /> 
                    </a>
                    <p> /jyw42 </p>
                </div>
            </div>

            <img id = "newspaper" alt = "toro reading newspaper" src = {newspaper} />
        </div>
    )
}

export default About;