import { useEffect } from "react";
import ProjectNav from "../components/ProjectNav";
import ScrollAnimation from "react-animate-on-scroll";
import peekaboo from "../assets/ti_peekaboo.webp";
import laying from "../assets/ti_laying.png";
import v_1 from "../assets/v_1.png";
import v_2 from "../assets/v_2.png";
import v_3 from "../assets/v_3.png";
import v_4 from "../assets/v_4.png";
import v_5 from "../assets/v_5.png";
import v_6 from "../assets/v_6.png";
import v_7 from "../assets/v_7.png";
import v_8 from "../assets/v_8.png";

function Vroomin() {
  let offset = 50;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-container">
      <div style={{ width: 60 + "vw" }}>
        <h1> vroomin </h1>
        <h3>
          a user experience designed to help facilitate campus ridesharing
        </h3>
      </div>

      <div className="flex-box-2">
        <div style={{ width: 500 + "px" }}>
          <h2 style={{ margin: 0 }}> goal </h2>
          <ScrollAnimation animateIn="fadeInUp" offset={offset}>
            <p>
              design an app/website that will allow college students to find
              other people going the same places.
            </p>
          </ScrollAnimation>

          <h2> thoughts </h2>
          <ScrollAnimation animateIn="fadeInUp" offset={offset}>
            <p>
              i've often wanted to go to events, places, or concerts in la.
              however, with a lack of access to a car, no desire to ride public
              transportation for more than an hour to arrive at my destination,
              and an unfortunately empty wallet, i found it hard to go to
              places.
            </p>
          </ScrollAnimation>
          <br />
          <ScrollAnimation animateIn="fadeInUp" offset={offset}>
            <p>
              while thinking of prompts for coursera's google ux design
              certificate course, which emphasized designing a user experience
              for social good, i thought of a ridesharing platform for college
              students. not only would it make students' lives more convenient,
              but you would be able to reduce individual carbon footprints.
            </p>
          </ScrollAnimation>
          <br />
          <ScrollAnimation animateIn="fadeInUp" offset={offset}>
            <p>
              i've seen this idea multiple times, namely for hackathons, but
              those projects were done from a swe's perspective (so more thought
              behind the coding and not really the design). i thought i could
              come up with an idea that was not only practical, but also good
              looking.
            </p>
          </ScrollAnimation>
          <br />
          <ScrollAnimation animateIn="fadeInUp" offset={offset}>
            <p>
              this takes us to vroomin (whose name i derived from the meme “they
              see us ridin', they hatin'” except it's now “they see us vroomin',
              they hatin'”). i went for a minimal design inspired by uber's
              concept and added some n.flying references (my favorite band).
            </p>
          </ScrollAnimation>
        </div>

        <div className="flex-box-5">
          <div>
            <h3> role </h3>
            <p> everything </p>
            <br />
            <h3> for </h3>
            <p> google ux design certificate </p>
            <br />
            <h3> date </h3>
            <p> august 2023 </p>
            <br />
            <h3> link </h3>
            <div className="project-link">
              <a
                href="https://www.figma.com/proto/fcOewlDV3eUSCCBXPx1ZJv/vroomin?page-id=0%3A1&type=design&node-id=37-3516&viewport=21%2C361%2C0.36&t=M6PgGAB2WC8J0DwX-1&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design"
                target="_blank"
                rel="noopener noreferrer"
              >
                prototype
              </a>
            </div>
            <br />
          </div>

          <img
            style={{ width: 250 + "px", marginTop: 50 + "px" }}
            alt="toro peekaboo"
            src={peekaboo}
          />
        </div>
      </div>

      <div>
        <section className="beige-bg">
          <h2> mockups </h2>
          <p> see prototype for more screens. </p>
          <ScrollAnimation
            animateIn="fadeIn"
            offset={offset}
            className="mobile-grid"
          >
            <img className="mobile-proto" alt="home" src={v_1} />
            <img className="mobile-proto" alt="choose a ride" src={v_2} />
            <img className="mobile-proto" alt="ride information" src={v_3} />
            <img className="mobile-proto" alt="ride requested" src={v_4} />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            offset={offset}
            className="web-grid"
          >
            <img className="web-proto" alt="home" src={v_5} />
            <img className="web-proto" alt="choose a ride" src={v_6} />
            <img className="web-proto" alt="ride information" src={v_7} />
            <img className="web-proto" alt="ride requested" src={v_8} />
          </ScrollAnimation>
        </section>

        <div className="flex-box-3">
          <img
            style={{ width: 300 + "px", marginTop: 100 + "px" }}
            alt="kuro laying down"
            src={laying}
          />
          <div style={{ width: 500 + "px" }}>
            <h2> next steps </h2>
            <ScrollAnimation animateIn="fadeInUp" offset={offset}>
              <p>
                what i have are merely designs for the main flow. other features
                i'd like to explore include messaging, notifications, and a
                profile. i'd also like to think of a way to reward users for
                successfully reducing their carbon footprint.
              </p>
            </ScrollAnimation>
            <h2> conclusion </h2>
            <ScrollAnimation animateIn="fadeInUp" offset={offset}>
              <p>
                i enjoyed working on this project since it's something i wish
                existed right now.
              </p>
            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInUp" offset={offset}>
              <p>
                although this is only a design (for now), hopefully it'll be a
                project that has some code and a userbase to go with it as well.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <ProjectNav
        previous={false}
        next={true}
        nextName="CreatorHub"
        nextLink="/creatorhub"
      />
    </div>
  );
}

export default Vroomin;
