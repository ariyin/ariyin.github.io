import React from 'react';
import Project from './Project';

import portfolio from '../assets/portfolio.png';
import vroomin from '../assets/vroomin.png';
import kalbum from '../assets/kalbum.png';
import creatorhub from '../assets/creatorhub.png';
import kalah from '../assets/kalah.png';
import olyverse from '../assets/olyverse.png';
import loocator from '../assets/loocator.png';
import namcap from '../assets/namcap.png';

const projectInfo = [
    { name: 'portfolio', date: 'september 2023 - present', description: 'this website aka what you are looking at right now :3', uix: true, code: true, image: portfolio},
    { name: 'vroomin', date: 'august 2023', description: 'a user experience designed to help facilitate campus ridesharing', uix: true, code: false, image: vroomin},
    { name: 'kalbum', date: 'july 2023 - august 2023', description: 'an ecommerce app & website for preordering kpop albums', uix: true, code: false, image: kalbum},
    { name: 'creatorhub', date: 'june 2023 - august 2023', description: 'a platform to connect brands with content creators for advertisement', uix: true, code: false, image: creatorhub},
    { name: 'kalah', date: 'may 2023 - june 2023', description: 'aka mancala; the goal is to get as many rocks as possible in your hole', uix: false, code: true, image: kalah},
    { name: 'olyverse', date: 'april 2023 - may 2023', description: 'a digital experience to engage with fans on all things ancillary to the LA28 games', uix: true, code: false, image: olyverse},
    { name: 'loocator', date: 'april 2023', description: 'an app designed to help you locate toilets close to you in your darkest hour', uix: true, code: true, image: loocator},
    { name: 'nam-cap', date: 'may 2022', description: 'pac-man but in reverse, where the player is a ghost and chases pac-man', uix: true, code: true, image: namcap},

]

function Projects() {
    return (
        <div className = "box">
            <h1> projects </h1> 
            <div id = "project-flex">
                {projectInfo.map((projects) => (
                    <a href={'https://ariyin.github.io/' + projects.name}> <Project name = {projects.name} date = {projects.date} description = {projects.description} uix = {projects.uix} code = {projects.code} image = {projects.image} /> </a>
                ))}
            </div>
        </div>
    )
}

export default Projects;