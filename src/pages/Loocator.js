import hi from "../assets/ti_hi.webp"
import wood from "../assets/ti_wood.webp"
import l_1 from "../assets/l_1.png"
import l_2 from "../assets/l_2.png"
import l_3 from "../assets/l_3.png"
import l_4 from "../assets/l_4.png"

function Loocator() {
    return (
        <div>
            <div style = {{width: 60 + 'vw', marginTop: 150 + 'px', marginLeft: 100 + 'px', marginRight: 100 + 'px'}}>
                <h1> loocator </h1>
                <h3> an app designed to help you locate toilets close to you in your darkest hour </h3>        
            </div>
            
            <div className = "flex-box-2">
                <div style = {{marginLeft: 100 + 'px', marginRight: 100 + 'px', width: 500 + 'px'}}>
                    <h2> goal </h2>
                    <p> participate in la hacks 2023 and learn new technologies while coding with friends. </p>

                    <h2> thoughts </h2>
                    <p> please read the pitch in our devpost. or our devpost in general. it explains everything.  </p>
                    <br/>
                    <p> as you might be able to tell after seeing the gallery, the app is heavily duck-themed, due to la hack's duck theme. the ducks are very cute (but irl ducks aren't as cute). </p>
                    <br/>
                    <p> the prototype is a little different than the actual finished product since there were some features / things we weren’t able to do but might be possible, had this been a long-term project. additionally, the prototype was a very early-stage ideation product, while during the actual coding, there were more opportunities to improve upon the ideations. </p>
                    <br/>
                    <p> i’m very proud of our team for coding and completing as much as we did! (though i'm not sure staying up until 5am was worth it.) </p>
                </div>

                <div className = "flex-box-5" style = {{marginTop : 50 + 'px', marginLeft: 100 + 'px', marginRight: 100 + 'px'}}>
                    <div>
                        <h3> role </h3>
                        <p> see devpost </p>
                        <br/>
                        <h3> for </h3>
                        <p> la hacks 2023 </p>
                        <br/>
                        <h3> date </h3>
                        <p> april 2023 </p>
                        <br/>
                        <h3> tools </h3>
                        <p> react native </p>
                        <p> javascript </p>
                        <p> html/css </p>
                        <p> google maps api </p>
                        <br/>
                        <h3> links </h3>
                        <div class = "project-link"> <a href = "https://devpost.com/software/loocator-0mjsxo" target="_blank" rel="noopener noreferrer"> devpost </a> </div>
                        <div class = "project-link"> <a href = "https://github.com/Monicaaawa/loocator" target="_blank" rel="noopener noreferrer"> source code </a> </div>
                        <div class = "project-link"> <a href = "https://www.figma.com/file/o3Ng1ah199pArd3fURxBaO/loocator?type=design&node-id=0%3A1&mode=design&t=gmEr9wMIbOsmmcOq-1" target="_blank" rel="noopener noreferrer"> prototype </a> </div>
                        <br/>
                    </div>

                    <img style = {{ height: 200 + 'px', marginTop: 50 + 'px' }} alt = "ricky carrying stuff" src = {wood} />
                </div>
            </div>

            <div style = {{marginLeft: 100 + 'px', marginBottom: 100 + 'px' }}>
                <h2> gallery </h2>
                <div className = "flex-box-3" style = {{ marginRight: 100 + 'px', marginTop: 30 + 'px'}}> 
                    <img className = "mobile-proto" alt = "login" src = {l_1} />
                    <img className = "mobile-proto" alt = "loading screen" src = {l_2} />
                    <img className = "mobile-proto" alt = "home" src = {l_3} />
                    <img className = "mobile-proto" alt = "profile" src = {l_4} />
                </div>

                <div className = "flex-box-3"> 
                    <img style = {{ height: 300 + 'px', marginTop: 100 + 'px' }} alt = "kuro waving" src = {hi} />
                    <div style = {{width: 500 + 'px', marginRight: 100 + 'px'}}>
                        <h2> next steps </h2>
                        <p> if this were an actual app, some features i'd like to include would be: a social aspect, leaderboard, explore page, bookmarking system, and the actual review system this app is dependent upon.  </p>
                        
                        <h2> conclusion </h2>
                        <p> gonna miss the loocrew. to all the other fellow loothusiasts out there: don't worry, the loocrew will come back one day. eventually. </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Loocator;