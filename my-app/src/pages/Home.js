import React from 'react';
import Tilt from 'react-parallax-tilt';
import toroinoue from '../assets/ti.png';
import doodle from '../assets/doodle.png';

function Home() {
    return (
        <>
            <Tilt
                style = {{transformStyle: "preserve-3d"}}
                // scale = {1.05}
                speed = {1000}
                tiltMaxAngleX = {5}
                tiltMaxAngleY = {5}
                perspective = {1000}
                trackOnWindow = {true}
            > 
                {/* <img className = "background-image" style = {{ transform: 'translateX(-50%)' }} src = {doodle} />  */}

                {/* <img className = "background-image" style = {{ transform: 'translateX(-50%) translateY(-20%) translateZ(0px)' }} src = {toroinoue} />  */}
                
                <div id = "name">
                    <div> jenna </div>
                    <span id = "name-w"> w </span> ang 
                </div>
            </Tilt>

            {/* <div id = "name">
                    <div> jenna </div>
                    <span id = "name-w"> w </span> ang 
                </div> */}
        </>
    )
}

export default Home;