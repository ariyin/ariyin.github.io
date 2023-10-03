import React from 'react';
import Tilt from 'react-parallax-tilt';
import toroinoue from '../assets/ti.png';

function Home() {
    return (
        <>
            <img className = "background-image" style = {{ transform: 'translateX(-50%) translateY(-50%)' }} src = {toroinoue} /> 

            {/* <Tilt 
                // style = {{transformStyle: "preserve-3d"}}
                // scale = {1.05}
                // speed = {1000}
                // tiltMaxAngleX = {5}
                // tiltMaxAngleY = {5}
                // perspective = {1000}
                // trackOnWindow = {true}
            >                 
                <div id = "name">
                    <div> jenna </div>
                    <span id = "name-w"> w </span> ang 
                </div>
            </Tilt> */}

            <div id = "name">
                jenna
                <br/>
                <span id = "name-w"> w </span> ang 
            </div>
        </>
    )
}

export default Home;