import { useEffect } from "react";
import ProjectNav from "../components/ProjectNav";
import cheers from "../assets/ti_cheers.webp";
import racecar from "../assets/ti_racecar.webp";
import o_1 from "../assets/o_1.png";
import o_2 from "../assets/o_2.png";
import o_3 from "../assets/o_3.png";
import o_4 from "../assets/o_4.png";
import o_5 from "../assets/o_5.png";
import o_6 from "../assets/o_6.png";
import o_7 from "../assets/o_7.png";
import o_8 from "../assets/o_8.png";
import o_9 from "../assets/o_9.png";
import o_10 from "../assets/o_10.png";
import o_11 from "../assets/o_11.png";
import o_12 from "../assets/o_12.png";

function Olyverse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-container">
      <div className="w-[60vw]">
        <h1 style={{ maxInlineSize: "500px", wordWrap: "break-word" }}>
          oly&shy;verse
        </h1>
        <h3>
          a digital experience to engage with fans on all things ancillary to
          the LA28 games
        </h3>
      </div>
      <div className="project-content">
        <div className="w-lg">
          <h2 className="m-0">goal</h2>
          <p>
            design an app that allows users to interact with LA28 athletes and
            get a fuller LA28 experience.
          </p>
          <h2>thoughts</h2>
          <p data-aos="light-fade-up">
            “ucla, aws, & slalom innovation challenge”
          </p>
          <br />
          <p data-aos="light-fade-up">
            wouldn't that name motivate you to join and see what it's about?
            well it definitely encouraged me. and encouraged the 36 screens i
            made in the span of one month.
          </p>
          <br />
          <p data-aos="light-fade-up">
            the prompt we were given was: “create a digital experience to engage
            with fans on all things ancillary to the LA28 games - access to
            athletes, special events, discounts, partner offers, merchandise,
            gamification (e.g., fantasy olympics, lotteries, etc.), social
            media, loyalty, personalized/premium digital content/media,
            fundraising”
          </p>
          <br />
          <p data-aos="light-fade-up">
            so, inspired by similar apps used for kpop idols, we created
            olyverse. the idea is that during the olympics, you would use this
            app to interact with athletes, buy LA28 gear with exclusive
            discounts and earn tickets for the chance to try and win signed
            athlete merchandise, watch the olympics streams with the opportunity
            to join watch parties, play fantasy olympics, and see the olympics
            results.
          </p>
          <br />
          <p data-aos="light-fade-up">
            you may say, “wow! that's a lot of features. and it's all on one
            app?” that's right, bucko. that's why i think this would be kind of
            like the ultimate app for the olympics. if this was reality, all the
            important features pertaining to the olympics would be conveniently
            accessible with one app.
          </p>
          <br />
          <p data-aos="light-fade-up">
            unfortunately the judges didn't think the same (so we didn't win the
            challenge), but i still think this idea holds potential. and
            certainly opened my eyes to my personal potential, seeing as this
            was basically the second time i ever used figma in my life.
          </p>
          <br />
          <p data-aos="light-fade-up">
            although we didn't win, i learned a lot through this challenge and
            got to make some unforgettable memories.
          </p>
        </div>
        <div className="project-summary">
          <div>
            <h3>role</h3>
            <p>ui/ux</p>
            <br />
            <h3>for</h3>
            <p>ucla, aws, & slalom innovation challenge</p>
            <br />
            <h3>date</h3>
            <p>april 2023 - may 2023</p>
            <br />
            <h3>link</h3>
            <div className="project-link">
              <a
                href="https://www.figma.com/proto/j0SvxjCB04E5bt2lMVlHmr/olyverse?page-id=0%3A1&type=design&node-id=175-2489&viewport=262%2C620%2C0.4&t=FbPHlckLynHC7iYL-1&scaling=scale-down&starting-point-node-id=175%3A2489&mode=design"
                target="_blank"
                rel="noopener noreferrer"
              >
                prototype
              </a>
            </div>
            <br />
          </div>
          <img
            alt="kuro cheers"
            src={cheers}
            className="mt-12 w-48 max-md:mb-12 max-md:w-36"
          />
        </div>
      </div>
      <div>
        <section className="beige-bg">
          <h2>mockups</h2>
          <p>see prototype for more screens.</p>
          <div className="mobile-grid" data-aos="fade-in">
            <img className="mobile-proto" alt="login" src={o_1} />
            <img className="mobile-proto" alt="follow athletes" src={o_2} />
            <img className="mobile-proto" alt="home" src={o_3} />
            <img className="mobile-proto" alt="explore" src={o_4} />
            <img className="mobile-proto" alt="team" src={o_5} />
            <img className="mobile-proto" alt="shop" src={o_6} />
            <img className="mobile-proto" alt="lottery" src={o_7} />
            <img className="mobile-proto" alt="stream" src={o_8} />
            <img className="mobile-proto" alt="watch party" src={o_9} />
            <img className="mobile-proto" alt="fantasy olympics" src={o_10} />
            <img className="mobile-proto" alt="leaderboard" src={o_11} />
            <img className="mobile-proto" alt="results" src={o_12} />
          </div>
        </section>
        <div className="project-end">
          <img
            alt="toro and kuro racecar"
            src={racecar}
            className="mt-24 h-40"
          />
          <div className="w-lg">
            <h2>next steps</h2>
            <p data-aos="light-fade-up">
              let this idea die since i don't think the olympics committee or
              whoever was in charge of the challenge was super interested.
            </p>
            <br />
            <p data-aos="light-fade-up">
              but this idea can still be used for a lot of different industries,
              so if anyone else is interested in it, please hire me.
            </p>
            <h2>conclusion</h2>
            <p data-aos="light-fade-up">
              i learned a lot about figma and its functions. the olympics would
              be based if this app existed (not biased review at all).
            </p>
          </div>
        </div>
      </div>
      <ProjectNav
        previous={true}
        previousName="CreatorHub"
        previousLink="/creatorhub"
        next={false}
      />
    </div>
  );
}

export default Olyverse;
