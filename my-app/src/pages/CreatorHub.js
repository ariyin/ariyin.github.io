import sit from "../assets/ti_sit.webp"
import chat from "../assets/ti_chat.webp"
import c_1 from "../assets/c_1.png"
import c_2 from "../assets/c_2.png"
import c_3 from "../assets/c_3.png"
import c_4 from "../assets/c_4.png"

function CreatorHub() {
    return (
        <div>
            <div style = {{width: 60 + 'vw', marginTop: 150 + 'px', marginLeft: 100 + 'px', marginRight: 100 + 'px'}}>
                <h1> creatorhub </h1>
                <h3> a platform to connect brands with content creators for advertisement </h3>        
            </div>
            
            <div className = "flex-box-2">
                <div style = {{marginLeft: 100 + 'px', marginRight: 100 + 'px', width: 500 + 'px'}}>
                    <h2> goal </h2>
                    <p> design the screens for the creatorhub mvp. </p>

                    <h2> background </h2>
                    <p> i am a gamer through and through (though not as much anymore). while looking for internships for summer 2023, i saw that creatorhub (a ucla startup that has to do with games) was looking for ui/ux interns. i applied, and lo and behold, got my summer internship. </p>
                    <br/>
                    <p> i like games, i like the color pink, what more could i ask for? (though admittedly i’m a light mode user, not a dark mode user, but i do like the color black.) </p>
                    <br/>
                    <p> the design for this site was inspired by the original designs provided and by other modern gaming sites. dark mode and pink is very trendy among gamers right now, trust. the voxel-styled artwork is the cherry on top and completes the design swellingly (imho). </p>
                    <br/>
                    <p> with direction and guidance from my fellow creatorhubers, i was able to complete 18 screens for the mvp. i don’t think it’s the best idea to show everything (so there’s no link to the very classified prototype), but i’d still like to show a few of my favorite screens.  </p>
                    <br/>
                    <p> contact me if you want to see more i guess (but only if you have good intentions). </p>
                </div>

                <div className = "flex-box-5" style = {{marginTop : 50 + 'px', marginLeft: 100 + 'px', marginRight: 100 + 'px'}}>
                    <div>
                        <h3> role </h3>
                        <p> ui/ux intern </p>
                        <br/>
                        <h3> for </h3>
                        <p> creatorhub </p>
                        <br/>
                        <h3> date </h3>
                        <p> june 2023 - august 2023 </p>
                        <br/>
                    </div>

                    <img style = {{ height: 380 + 'px', marginTop: 50 + 'px'}} src = {sit} />
                </div>
            </div>

            <div style = {{marginLeft: 100 + 'px', marginBottom: 100 + 'px' }}>
                <h2> mockups </h2>
                <div className = "flex-box-3" style = {{ marginRight: 100 + 'px', marginTop: 30 + 'px'}}> 
                    <img className = "web-proto" src = {c_1} />
                    <img className = "web-proto" src = {c_2} />
                    <img className = "web-proto" src = {c_3} />
                    <img className = "web-proto" src = {c_4} />
                </div>

                <div className = "flex-box-3"> 
                    <img style = {{ width: 300 + 'px', marginTop: 100 + 'px' }} src = {chat} />
                    <div style = {{width: 500 + 'px', marginRight: 100 + 'px'}}>
                        <h2> next steps </h2>
                        <p> since this was a summer internship, i don’t have a lot of notes about personal next steps. but i think the next steps would be to complete the coding portion of the mvp and then make it greater. </p>
                        
                        <h2> conclusion </h2>
                        <p> i have successfully completed a summer internship! </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CreatorHub;