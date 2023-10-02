import cheer from "../assets/ti_cheer.png"
import pan from "../assets/ti_pan.webp"
import k_1 from "../assets/k_1.png"
import k_2 from "../assets/k_2.png"
import k_3 from "../assets/k_3.png"
import k_4 from "../assets/k_4.png"
import k_5 from "../assets/k_5.png"
import k_6 from "../assets/k_6.png"
import k_7 from "../assets/k_7.png"
import k_8 from "../assets/k_8.png"


function Kalbum() {
    return (
        <div>
            <div style = {{width: 60 + 'vw', marginTop: 150 + 'px', marginLeft: 100 + 'px', marginRight: 100 + 'px'}}>
                <h1> kalbum </h1>
                <h3> an ecommerce app & website for preordering kpop albums </h3>        
            </div>
            
            <div className = "flex-box-2">
                <div style = {{marginLeft: 100 + 'px', marginRight: 100 + 'px', width: 500 + 'px'}}>
                    <h2> goal </h2>
                    <p> design an app/website where a user can preorder whatever kpop album they want seamlessly. </p>

                    <h2> background </h2>
                    <p> i’ve been into kpop since 2017. collecting albums is one of those things that a lot of fans are interested in. (but which i’ve never done because i can’t convince myself to spend money on a photobook of real people i’ll only look at once. but i do see the appeal. i really do.)  </p>
                    <br/>
                    <p> however, there are some problems with current album preordering platforms: </p>
                    <br/>
                    <p> 1. <b> no one-stop platform</b>: with multiple kpop groups belonging to multiple agencies, it can be hard navigating between different sites and platforms to preorder various kpop albums. </p>
                    <br/>
                    <p> 2. <b> lack of information</b>: some users find the process to preorder kpop albums difficult and don’t know how to start the process. how do the benefits work? how can i be entered into fansign raffles? etc. </p>
                    <br/>
                    <p> 3. <b> can’t read korean</b>: the k in kpop stands for korean, hence a lot of important information will sometimes be in korean. thus, ordering from the source websites can be difficult. </p>
                    <br/>
                    <p> 4. <b> shipping fees</b>: as the albums originate in korea, the shipping fees may be exorbitantly high. these expensive shipping fees may discourage users from purchasing albums. </p>
                    <br/>
                    <p> overall, these problems make kalbum (very original and thought out name that is just k album… korean albums…) the perfect solution. </p>
                    <br/>
                    <p> ecommerce apps and websites are pretty common nowadays, so while a modern and clean design is still necessary to attract customers and convince them this isn’t a scam, the main selling point of kalbum is the business of it. </p>
                    <br/>
                    <p> but speaking more about the design, the app design is in fact something i’m no longer super happy about personally. i think i'd like to redo it if i had a chance. i do really like the website design though.  </p>
                    <br/>
                    <p> while both designs were inspired by the new jeans / y2k aesthetic, i designed the app in july (using figma), while the website was designed in august (using adobe xd, which i’m not sure how many people use these days). i guess in this short span of time, i became more critical and aware of what i designed. </p>
                </div>

                <div className = "flex-box-5" style = {{marginTop : 50 + 'px', marginLeft: 100 + 'px', marginRight: 100 + 'px'}}>
                    <div>
                        <h3> role </h3>
                        <p> everything </p>
                        <br/>
                        <h3> for </h3>
                        <p> google ux design certificate </p>
                        <br/>
                        <h3> date </h3>
                        <p> july 2023 - august 2023 </p>
                        <br/>
                        <h3> links </h3>
                        <div class = "project-link"> <a href = "https://www.figma.com/file/yoY5lPuXM1JJ7qD40gJ484/kalbum?type=design&node-id=0%3A1&mode=design&t=GSFD8JhF6DnppjYH-1" target="_blank" rel="noopener noreferrer"> mobile prototype </a> </div>
                        <div class = "project-link"> <a href = "https://xd.adobe.com/view/0a9a412b-6fa1-4281-b286-5a39a1e4173a-5fc9/?fullscreen" target="_blank" rel="noopener noreferrer"> desktop prototype </a> </div>
                        <br/>
                    </div>

                    <img style = {{ height: 450 + 'px', marginTop: 50 + 'px' }} src = {cheer} />
                </div>
            </div>

            <div style = {{marginLeft: 100 + 'px', marginBottom: 100 + 'px' }}>
                <h2> mockups </h2>
                <p> see prototypes for more screens. </p>
                <div className = "flex-box-3" style = {{ marginRight: 100 + 'px', marginTop: 30 + 'px'}}> 
                    <img className = "mobile-proto" src = {k_1} />
                    <img className = "mobile-proto" src = {k_2} />
                    <img className = "mobile-proto" src = {k_3} />
                    <img className = "mobile-proto" src = {k_4} />
                    <img className = "web-proto" src = {k_5} />
                    <img className = "web-proto" src = {k_6} />
                    <img className = "web-proto" src = {k_7} />
                    <img className = "web-proto" src = {k_8} />
                </div>

                <div className = "flex-box-3"> 
                    <img style = {{ height: 400 + 'px', marginTop: 100 + 'px' }} src = {pan} />
                    <div style = {{width: 500 + 'px', marginRight: 100 + 'px'}}>
                        <h2> next steps </h2>
                        <p> because the prototype i have are mainly concerned about the main flow, i’d like to focus on other features in the future, such as implementing a feature where users are able to track orders and see the status of the shipment through the platform, adding notifications for when followed artists release album preorders, and creating a review system to build trust among users and to see user-based information about albums.  </p>
                        
                        <h2> conclusion </h2>
                        <p> i enjoyed working on this project since it’s something i wish existed right now. </p>
                        <br/>
                        <p> although this is only a design (for now), hopefully it’ll be a project that has some code and a userbase to go with it as well. </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Kalbum;