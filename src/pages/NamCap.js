import bluewave from "../assets/ti_bluewave.png"
import sleep from "../assets/ti_sleep.webp"
import n_1 from "../assets/n_1.png"
import n_2 from "../assets/n_2.png"
import n_3 from "../assets/n_3.png"
import n_4 from "../assets/n_4.png"

function NamCap() {
    return (
        <div>
            <div style = {{width: 60 + 'vw', marginTop: 150 + 'px', marginLeft: 100 + 'px', marginRight: 100 + 'px'}}>
                <h1> nam-cap </h1>
                <h3> pac-man but in reverse, where the player is a ghost and chases pac-man </h3>        
            </div>
            
            <div className = "flex-box-2">
                <div style = {{marginLeft: 100 + 'px', marginRight: 100 + 'px', width: 500 + 'px'}}>
                    <h2> goal </h2>
                    <p> code a functional game that incorporates the features brainstormed prior to starting the project. </p>

                    <h2> thoughts </h2>
                    <p> for our final capstone project for apcs, we decided to create a game based on pacman, as one of our previous assignments focused on 2d arrays and using recursion through those arrays. however, we added a little twist: instead of playing as pacman, the player would play as one of the ghosts.   </p>
                    <br/>
                    <p> the idea of the game is simple: players first choose the ghost they wish to play with. players can gain points by consuming the strawberries around the map or by eating nam-cap. if nam-cap eats a kiwi, nam-cap gains the ability to eat the player. the overall goal of the game is to gain as many points as possible before losing all three lives.  </p>
                    <br/>
                    <p> i designed much of the graphics for this project as well as nam-cap’s algorithm, which is just a bfs alogorithm. one difficulty was that the recursive calculations made the game lag heavily. however, being a high schooler, the only algorithms i knew were recursive algorithms, so some “smartness” nam-cap could’ve achieved had to be sacrificed.  </p>
                    <br/>
                    <p> a cool feature that might go unnoticed is that depending on whichever ghost you choose, the icons and images of said ghost will have the same color as the one you choose. </p>
                    <br/>
                    <p> overall, i believe we accomplished a great deal of what we wanted to accomplish. although the game isn’t as good as it could be (in the alternate universe where we're all experienced developers), it’s still a pretty fun game that embodies the pacman retro vibe. </p>
                </div>

                <div className = "flex-box-5" style = {{marginTop : 50 + 'px', marginLeft: 100 + 'px', marginRight: 100 + 'px'}}>
                    <div>
                        <h3> role </h3>
                        <p> graphics </p>
                        <p> nam-cap, fruit, & kiwi class </p>
                        <p> + other misc. features </p>
                        <br/>
                        <h3> for </h3>
                        <p> ap computer science a </p>
                        <br/>
                        <h3> date </h3>
                        <p> may 2022 </p>
                        <br/>
                        <h3> language </h3>
                        <p> java </p>
                        <br/>
                        <h3> link </h3>
                        <div class = "project-link"> <a href = "https://github.com/HHSAPCompSci2021/capstoneproject-capstone-desiree-brianna-jenna-idk" target="_blank" rel="noopener noreferrer"> source code </a> </div>
                        <br/>
                    </div>

                    <img style = {{ height: 300 + 'px', marginTop: 50 + 'px' }} alt = "sora waving" src = {bluewave} />
                </div>
            </div>

            <div style = {{marginLeft: 100 + 'px', marginBottom: 100 + 'px' }}>
                <h2> gallery </h2>
                <div className = "flex-box-3" style = {{ marginRight: 100 + 'px', marginTop: 30 + 'px'}}> 
                    <img className = "web-proto" alt = "home" src = {n_1} />
                    <img className = "web-proto" alt = "alternate home" src = {n_2} />
                    <img className = "web-proto" alt = "playing" src = {n_3} />
                    <img className = "web-proto" alt = "game over" src = {n_4} />
                </div>

                <div className = "flex-box-3"> 
                    <img style = {{ height: 200 + 'px', marginTop: 100 + 'px' }} alt = "ricky sleeping" src = {sleep} />
                    <div style = {{width: 500 + 'px', marginRight: 100 + 'px'}}>
                        <h2> next steps </h2>
                        <p> other features that could be implemented is a smartness level, where players may choose how "smart" they wish nam-cap will behave; multiplayer functions that will allow user control for nam-cap and the other ghosts on different devices; different features on maps such as portals, secret passages, and hiding spots. </p>
                        
                        <h2> conclusion </h2>
                        <p> despite being something i created 2 years ago (as i type this), i still find this a pretty solid game. </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NamCap;