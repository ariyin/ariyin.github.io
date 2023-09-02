import React from 'react';
import Project from './Project';

import vroomin from '../assets/vroomin.png';

const projectInfo = [
    { name: 'vroomin', date: 'august 2023', description: 'a user experience designed to help facilitate campus ridesharing among college students', uix: true, code: false, image: vroomin},
]

function Projects() {
    return (
        <div className = "box">
            <h1 style = {{paddingTop: 25 + 'px'}}> projects </h1> 
            <div id = "project-flex">
                {projectInfo.map((projects) => (
                            <Project name = {projects.name} date = {projects.date} description = {projects.description} uix = {projects.uix} code = {projects.code} image = {projects.image} />
                ))}
            </div>
        </div>
    )
}

export default Projects;