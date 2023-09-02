import React from 'react';
import mail from '../assets/mail.png';
import discord from '../assets/discord.png';
import linkedin from '../assets/linkedin.png';
import newspaper from '../assets/newspaper.png';

function About() {
    return (
        <div className = "flex-box">
            <div className = "box">
                <h1 style = {{marginTop: 25 + 'px'}}> about me </h1> 

                <h3> hello! </h3>

                <p style = {{marginTop: 15 + 'px'}}> i’m a second year cs major at ucla, interested mostly in front-end and ui/ux! </p>
                <p> in my spare time, i enjoy playing video games, reading manhwas and novels, </p> 
                <p> and exploring whatever my latest interest might be. </p>  

                <h3 style = {{marginTop: 25 + 'px'}}> my most recent listen: </h3>

                <h1 style = {{marginTop: 30 + 'px'}}> contact me </h1>

                <div className = "icon-text" style = {{marginBottom: 15 + 'px'}}> 
                    <a href = "mailto:jenna2004@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img className = "icon" src = {mail} /> 
                    </a>
                    <p> jenna2004@gmail.com </p>
                </div>

                <div className = "icon-text" style = {{marginBottom: 15 + 'px'}}> 
                    <img className = "icon" src = {discord} /> 
                    <p> jayenay </p>
                </div>

                <div className = "icon-text"> 
                    <a href = "https://www.linkedin.com/in/jyw42/" target="_blank" rel="noopener noreferrer">
                        <img className = "icon" src = {linkedin} /> 
                    </a>
                    <p> /jyw42 </p>
                </div>
            </div>

            <img id = "newspaper" style = {{ }} src = {newspaper} />
        </div>
    )
}

export default About;