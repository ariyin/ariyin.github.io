import { useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "../Zoom.css";
import ProjectNav from "../components/ProjectNav";
import chat from "../assets/cat/chat.webp";
import run from "../assets/cat/run.webp";
import c_1 from "../assets/prototypes/c_1.png";
import c_2 from "../assets/prototypes/c_2.png";
import c_3 from "../assets/prototypes/c_3.png";
import c_4 from "../assets/prototypes/c_4.png";

const webProtos = [
  { src: c_1, alt: "home" },
  { src: c_2, alt: "sign up" },
  { src: c_3, alt: "profile" },
  { src: c_4, alt: "analytics" },
];

function CreatorHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-container">
      <div className="w-[60vw]">
        <h1 style={{ maxInlineSize: "500px", wordWrap: "break-word" }}>
          crea&shy;tor&shy;hub
        </h1>
        <h3>
          a platform to connect brands with content creators for advertisement
        </h3>
      </div>
      <div className="project-content">
        <div className="w-lg">
          <h2 className="m-0">goal</h2>
          <p data-aos="light-fade-up">
            design the screens for the creatorhub mvp.
          </p>
          <h2>thoughts</h2>
          <p data-aos="light-fade-up">
            i am a gamer through and through (though not as much anymore). while
            looking for internships for summer 2023, i saw that creatorhub (a
            ucla startup that has to do with games) was looking for ui/ux
            interns. i applied, and lo and behold, got my summer internship.
          </p>
          <br />
          <p data-aos="light-fade-up">
            i like games, i like the color pink, what more could i ask for?
            (though admittedly i'm a light mode user, not a dark mode user, but
            i do like the color black.)
          </p>
          <br />
          <p data-aos="light-fade-up">
            the design for this site was inspired by the original designs
            provided and by other modern gaming sites. dark mode and pink is
            very trendy among gamers right now, trust. the voxel-styled artwork
            is the cherry on top and completes the design swellingly (imho).
          </p>
          <br />
          <p data-aos="light-fade-up">
            with direction and guidance from my fellow creatorhubers, i was able
            to complete 18 screens for the mvp. i don't think it's the best idea
            to show everything (so there's no link to the very classified
            prototype), but i'd still like to show a few of my favorite screens.
          </p>
          <br />
          <p data-aos="light-fade-up">contact me if you want to see more!</p>
        </div>
        <div className="project-summary">
          <div>
            <h3>role</h3>
            <p>ui/ux intern</p>
            <br />
            <h3>for</h3>
            <p>creatorhub</p>
            <br />
            <h3>date</h3>
            <p>june 2023 - august 2023</p>
            <br />
          </div>
          <img
            src={run}
            className="mt-12 w-72 max-md:mb-12 max-md:w-64"
            alt=""
          />
        </div>
      </div>
      <div>
        <section className="beige-bg">
          <h2>mockups</h2>
          <div className="web-grid" data-aos="fade-in">
            {webProtos.map(({ src, alt }, index) => (
              <Zoom>
                <img src={src} key={index} className="web-proto" alt={alt} />
              </Zoom>
            ))}
          </div>
        </section>
        <div className="project-end">
          <img src={chat} className="w-64 max-md:mt-12 max-md:w-48" alt="" />
          <div className="w-lg">
            <h2>next steps</h2>
            <p data-aos="light-fade-up">
              since this was a summer internship, i don't have a lot of notes
              about personal next steps. but i think there are always ways to
              improve and reiterate pre-existing designs.
            </p>
            <h2>conclusion</h2>
            <p data-aos="light-fade-up">
              i have successfully completed a summer internship!
            </p>
          </div>
        </div>
      </div>
      <ProjectNav
        previous={true}
        previousName="vroomin"
        previousLink="/vroomin"
        next={true}
        nextName="Olyverse"
        nextLink="/olyverse"
      />
    </div>
  );
}

export default CreatorHub;
