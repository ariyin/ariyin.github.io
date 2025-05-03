import { useEffect } from "react";
import ProjectNav from "../components/ProjectNav";
import chat from "../assets/ti_chat.webp";
import chase from "../assets/ti_chase.webp";
import c_1 from "../assets/c_1.png";
import c_2 from "../assets/c_2.png";
import c_3 from "../assets/c_3.png";
import c_4 from "../assets/c_4.png";

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

      <div className="flex-box-2">
        <div className="w-lg">
          <h2 className="m-0">goal</h2>
          <p>design the screens for the creatorhub mvp.</p>

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

        <div className="flex-box-5">
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
            alt="chasing"
            src={chase}
            className="mt-12 w-72 max-lg:mb-12 max-lg:w-64"
          />
        </div>
      </div>

      <div>
        <section className="beige-bg">
          <h2>mockups</h2>
          <div className="web-grid" data-aos="fade-in">
            <img className="web-proto" alt="home" src={c_1} />
            <img className="web-proto" alt="sign up" src={c_2} />
            <img className="web-proto" alt="profile" src={c_3} />
            <img className="web-proto" alt="analytics" src={c_4} />
          </div>
        </section>

        <div className="flex-box-3">
          <img
            alt="toro and kuro chatting"
            src={chat}
            className="w-64 max-lg:mt-12 max-lg:w-48"
          />
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
