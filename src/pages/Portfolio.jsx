import call from "../assets/ti_call.webp"
import recieve from "../assets/ti_recieve.webp"

function Portfolio() {
    return (
        <div className = "margin-sides">
            <div style = {{width: 60 + 'vw', marginTop: 150 + 'px'}}>
                <h1 style = {{maxInlineSize: 500 + 'px', wordWrap: "break-word"}}> port&shy;folio </h1>
                <h3> this website aka what you are looking at right now :3 </h3>        
            </div>
            
            <div className = "flex-box-2">
                <div style = {{width: 500 + 'px'}}>
                    <h2> goal </h2>
                    <p> design a website that introduces myself to whoever's looking and display my skills in a tangible format. </p>

                    <h2> thoughts </h2>
                    <p> the theme for my website is toro inoue (the cat), or more broadly, doko demo issyo (the game the cat is from). i really like cats, and i liked toro inoue, so i thought it would be a cute theme to have. </p>
                    <br/>
                    <p> the fonts i chose also relate to the game (but i doubt they’re the exact fonts used). the paragraph text is the speech text used in the game, and the header text is the title text used in a magazine about the game. </p>
                    <br/>
                    <p> the project pages include images of other characters from the game, but i might have to limit the number of projects i have, simply because there’s not that many character pngs i can use… </p>
                    <br/>
                    <p> the prototype (might be too much to call it that, since it’s just a draft of the designs i wanted) is pretty simple, and i only designed the four main screens necessary (since the project pages all use basically the same template).  </p>
                    <br/>
                    <p> but the reason why i wanted to include the figma draft is because i put a lot of my inspiration on it, mostly kpop fonts and the example portfolio from the google ux design certificate course that helped me figure out what the portfolio should look like. i also had lots of lists of things that should go on a portfolio, though i’m not sure how well i checked off those lists in the end. </p>
                    <br/>
                    <p> translating from medium to medium (figma to vscode, vscode to github pages) was very hard. there are some dimensions (such as px) that don't translate perfectly to the website i see on the screen. and trying to set up github pages was quite a nightmare. but it worked out in the end, so all is good in the world. </p>
                    <br/>
                    <p> in the end though, i hope this portfolio is satisfactory and might be able to convey what i wish to convey. </p>
                </div>

                <div className = "flex-box-5" style = {{marginTop : 50 + 'px'}}>
                    <div>
                        <h3> role </h3>
                        <p> everything </p>
                        <br/>
                        <h3> for </h3>
                        <p> myself and recruiters </p>
                        <br/>
                        <h3> date </h3>
                        <p> september 2023 - present </p>
                        <br/>
                        <h3> tools </h3>
                        <p> react </p>
                        <p> javascript </p>
                        <p> html/css </p>
                        <br/>
                        <h3> link </h3>
                        <div class = "project-link"> <a href = "https://www.figma.com/file/9P5V72hAUcNJwpdRYE1SmV/website?type=design&node-id=0%3A1&mode=design&t=EGjWfGHAyKlmrsxV-1" target="_blank" rel="noopener noreferrer"> prototype </a> </div>
                        <div class = "project-link"> <a href = "https://github.com/ariyin/ariyin.github.io" target="_blank" rel="noopener noreferrer"> source code </a> </div>
                        <br/>
                    </div>

                    <img style = {{ height: 280 + 'px', marginTop: 50 + 'px' }} alt = "pierre calling" src = {call} />
                </div>
            </div>

            <div style = {{marginBottom: 100 + 'px' }}>
                <div className = "flex-box-3"> 
                    <img style = {{ height: 250 + 'px', marginTop: 100 + 'px' }} alt = "jun recieving the call" src = {recieve} />
                    <div style = {{width: 500 + 'px'}}>
                        <h2> next steps </h2>
                        <p> some small changes i want to make are qol changes in the project pages and more animation/css where applicable. but the biggest change i'd like to see someday is the existence of different themes.</p>
                        <br/> 
                        <p> from the very start, i wanted my website to have different themes (not light/dark mode, but actual themes). </p>
                        <br/>
                        <p> aside from toro inoue, i wanted two other themes: one inspired by blackpink (i am not a blink, i just like those colors) and one inspired by newjeans (y2k aesthetic). i wanted it so that if you changed themes, the fonts, pictures, and colors of the site would change. </p>
                        <br/>
                        <p> i’m not actually sure how possible this is, which is why this is a reach for me right now, but i think it would be very cool and a nice long-term project. </p>
                        
                        <h2> conclusion </h2>
                        <p> it's a pretty nice website, if i do say so myself. </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Portfolio;