import React from 'react';
import mail from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import newspaper from '../assets/newspaper.png';
import { LastFMData } from './LastFMData';

function About() {
    return (
        <div className = "flex-box">
            <div className = "box">
                <h1> about me </h1> 

                <h3> hello! </h3>

                <p style = {{marginTop: 15 + 'px', marginBottom: 25 + 'px', maxWidth: 600 + 'px'}}> i'm a second year cs major at ucla, interested in full stack (mostly front-end), ui/ux, and ui development! in my spare time, i enjoy playing video games, reading manhwas and novels, listening to kpop albums i've never heard before, and exploring whatever my latest interest might be. </p>  

                <LastFMData
                    username = {'j00101010'}
                    apiKey = {'2e9538854d56a1ff4ca740d44ce38ab7'}
                />

                <h1 style = {{marginTop: 30 + 'px'}}> contact </h1>

                    <div className = "icon-text" style = {{marginBottom: 15 + 'px'}}> 
                        <span> 
                            <img className = "icon" alt = "mail icon" src = {mail} /> 
                            <a className = "underline-highlight" href = "mailto:jenna2004@gmail.com" target="_blank" rel="noopener noreferrer">
                                <p> jenna2004@gmail.com </p> 
                            </a>
                        </span>
                    </div>

                    <div className = "icon-text" style = {{marginBottom: 15 + 'px'}}> 
                        <span>
                            <img className = "icon" alt = "linkedin icon" src = {linkedin} /> 
                            <a className = "underline-highlight" href = "https://www.linkedin.com/in/jyw42/" target="_blank" rel="noopener noreferrer">
                                <p> /jyw42 </p>
                            </a>
                        </span>

                </div>
            </div>

            <img id = "newspaper" alt = "toro reading newspaper" src = {newspaper} />
        </div>
    )
}

export default About;