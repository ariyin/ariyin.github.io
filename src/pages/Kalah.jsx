import peekaboo from "../assets/ti_peekaboo.webp"
import painting from "../assets/ti_painting.webp"

function Kalah() {
    return (
        <div className = "margin-sides">
            <div style = {{width: 60 + 'vw', marginTop: 150 + 'px'}}>
                <h1> kalah </h1>
                <h3> aka mancala; the goal is to get as many rocks as possible in your hole </h3>        
            </div>
            
            <div className = "flex-box-2">
                <div style = {{width: 500 + 'px'}}>
                    <h2> goal </h2>
                    <p> create a program that fulfills the project requirements. </p>

                    <h2> thoughts </h2>
                    <p> if you’ve never played mancala, wyd? back in my days (when i was in elementary school), i used to sit on the living room rug playing mancala against myself and calculate the best move sequence so i could continuously keep gaining an extra turn (i don’t know what that says about myself for me to be doing that at such a young age but i’m not gonna think too much abt it).  </p>
                    <br/>
                    <p> needless to say, i was a bit excited at receiving mancala as my project 3 assignment in cs 32 (supposedly the most notoriously difficult project).  </p>
                    <br/>
                    <p> to summarize the project spec, it basically asks for a fully functional mancala (or kalah) game, with an additional cs twist: an ai opponent that uses the minimax algorithm and returns a move in a limited amount of time. </p>
                    <br/>
                    <p> let me tell you, trying to trace the minimax tree to see if my code was working correctly or not was not a fun time, contrary to popular belief. (peep the just in case.psd in the github repo to see what i’m talking about.) </p>
                    <br/>
                    <p> but i did it! and the ai opponent is pretty smart! who would’ve figured, right? </p>
                </div>

                <div className = "flex-box-5" style = {{marginTop : 50 + 'px'}}>
                    <div>
                        <h3> role </h3>
                        <p> code </p>
                        <br/>
                        <h3> for </h3>
                        <p> cs 32 </p>
                        <br/>
                        <h3> date </h3>
                        <p> may 2023 - june 2023 </p>
                        <br/>
                        <h3> language </h3>
                        <p> c++ </p>
                        <br/>
                        <h3> links </h3>
                        <div class = "project-link"> <a href = "https://web.cs.ucla.edu/classes/spring23/cs32/Projects/3/spec.html" target="_blank" rel="noopener noreferrer"> project spec </a> </div>
                        <div class = "project-link"> <a href = "https://github.com/ariyin/CS32/tree/main/Kalah" target="_blank" rel="noopener noreferrer"> source code </a> </div>
                        <br/>
                    </div>

                    <img style = {{ height: 250 + 'px', marginTop: 50 + 'px' }} alt = "toro and kuro peekaboo" src = {peekaboo} />
                </div>
            </div>

            <div style = {{marginBottom: 100 + 'px' }}>
                <div className = "flex-box-3"> 
                    <img style = {{ height: 230 + 'px', marginTop: 100 + 'px' }} alt = "pierre painting" src = {painting} />
                    <div style = {{width: 500 + 'px'}}>
                        <h2> next steps </h2>
                        <p> figure out what went wrong, because my code was unfortunately not perfect. and figure out if i can ever beat the ai. </p>
                        
                        <h2> conclusion </h2>
                        <p> mancala is a superior game. ai is unfortunately better at mancala than i am. </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Kalah;