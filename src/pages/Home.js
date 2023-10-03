import React from 'react';
import Tilt from 'react-parallax-tilt';
import toroinoue from '../assets/ti.png';
import border from '../assets/border.png';

function Home() {
    return (
        <>
            <div class = "triangles">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <img className = "background-image" style = {{ transform: 'translateX(-50%) translateY(-52%)' }} alt = "toro emoticons" src = {toroinoue} /> 

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

            <img id = "bottom-border" alt = "bottom border" src = {border} />

        </>
    )
}

export default Home;