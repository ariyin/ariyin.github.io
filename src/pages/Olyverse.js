import cheers from "../assets/ti_cheers.webp"
import racecar from "../assets/ti_racecar.webp"
import o_1 from "../assets/o_1.png"
import o_2 from "../assets/o_2.png"
import o_3 from "../assets/o_3.png"
import o_4 from "../assets/o_4.png"
import o_5 from "../assets/o_5.png"
import o_6 from "../assets/o_6.png"
import o_7 from "../assets/o_7.png"
import o_8 from "../assets/o_8.png"
import o_9 from "../assets/o_9.png"
import o_10 from "../assets/o_10.png"
import o_11 from "../assets/o_11.png"
import o_12 from "../assets/o_12.png"


function Olyverse() {
    return (
        <div>
            <div style = {{width: 60 + 'vw', marginTop: 150 + 'px', marginLeft: 100 + 'px', marginRight: 100 + 'px'}}>
                <h1> olyverse </h1>
                <h3> a digital experience to engage with fans on all things ancillary to the LA28 games </h3>        
            </div>
            
            <div className = "flex-box-2">
                <div style = {{marginLeft: 100 + 'px', marginRight: 100 + 'px', width: 500 + 'px'}}>
                    <h2> goal </h2>
                    <p> design an app that allows users to interact with LA28 athletes and get a fuller LA28 experience. </p>

                    <h2> background </h2>
                    <p> “ucla, aws, & slalom innovation challenge”  </p>
                    <br/>
                    <p> wouldn’t that name and the exclusiveness motivate you to join and see what it’s about? well it definitely encouraged me. and encouraged the 36 screens i made single-handedly in the span of one month while juggling schoolwork. </p>
                    <br/>
                    <p> the prompt we were given was: “create a digital experience to engage with fans on all things ancillary to the LA28 games - access to athletes, special events, discounts, partner offers, merchandise, gamification (e.g., fantasy olympics, lotteries, etc.), social media, loyalty, personalized/premium digital content/media, fundraising” </p>
                    <br/>
                    <p> so, inspired by similar apps used for kpop idols, we created olyverse. the idea is that during the olympics, you would use this app to interact with athletes, buy LA28 gear with exclusive discounts and earn tickets for the chance to try and win signed athlete merchandise, watch the olympics streams with the opportunity to join watch parties, play fantasy olympics, and see the olympics results.  </p>
                    <br/>
                    <p> you may say, “wow! that’s a lot of features. and it’s all on one app?” that’s right, bucko. that’s why i think this would be kind of like the ultimate app for the olympics. if this was reality, all the important features pertaining to the olympics would be conveniently accessible with one app.  </p>
                    <br/>
                    <p> unfortunately the judges didn’t think the same (so we didn’t win the challenge), but i still think this idea holds potential. and certainly opened my eyes to my personal potential, seeing as this was basically the second time i ever used figma in my life.  </p>
                    <br/>
                    <p> although we didn’t win, i learned a lot through this challenge and got to make some unforgettable memories. </p>
                </div>

                <div className = "flex-box-5" style = {{marginTop : 50 + 'px', marginLeft: 100 + 'px', marginRight: 100 + 'px'}}>
                    <div>
                        <h3> role </h3>
                        <p> ui/ux </p>
                        <br/>
                        <h3> for </h3>
                        <p> ucla, aws, & slalom innovation challenge </p>
                        <br/>
                        <h3> date </h3>
                        <p> april 2023 - may 2023 </p>
                        <br/>
                        <h3> link </h3>
                        <div class = "project-link"> <a href = "https://www.figma.com/proto/j0SvxjCB04E5bt2lMVlHmr/olyverse?page-id=0%3A1&type=design&node-id=60-5955&viewport=143%2C451%2C0.11&t=WN55rM6BlRbhfa1t-1&scaling=scale-down&starting-point-node-id=175%3A2489&mode=design" target="_blank" rel="noopener noreferrer"> prototype </a> </div>
                        <br/>
                    </div>

                    <img style = {{ height: 400 + 'px', marginTop: 50 + 'px' }} src = {cheers} />
                </div>
            </div>

            <div style = {{marginLeft: 100 + 'px', marginBottom: 100 + 'px' }}>
                <h2> mockups </h2>
                <p> see prototype for more screens. </p>
                <div className = "flex-box-3" style = {{ marginRight: 100 + 'px', marginTop: 30 + 'px'}}> 
                    <img className = "mobile-proto" src = {o_1} />
                    <img className = "mobile-proto" src = {o_2} />
                    <img className = "mobile-proto" src = {o_3} />
                    <img className = "mobile-proto" src = {o_4} />
                    <img className = "mobile-proto" src = {o_5} />
                    <img className = "mobile-proto" src = {o_6} />
                    <img className = "mobile-proto" src = {o_7} />
                    <img className = "mobile-proto" src = {o_8} />
                    <img className = "mobile-proto" src = {o_9} />
                    <img className = "mobile-proto" src = {o_10} />
                    <img className = "mobile-proto" src = {o_11} />
                    <img className = "mobile-proto" src = {o_12} />
                </div>

                <div className = "flex-box-3"> 
                    <img style = {{ height: 200 + 'px', marginTop: 100 + 'px' }} src = {racecar} />
                    <div style = {{width: 500 + 'px', marginRight: 100 + 'px'}}>
                        <h2> next steps </h2>
                        <p> let this idea die since i don't think the olympics committee or whoever was in charge of the challenge was super interested.  </p>
                        
                        <h2> conclusion </h2>
                        <p> i learned a lot about figma and its functions. i would not do this challenge again due to the stress and false advertisement though. </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Olyverse;