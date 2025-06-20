import React, { useEffect } from "react";
import CodeProject from "../components/CodeProject";
import UIProject from "../components/UIProject";
import useTitle from "../components/useTitle";
import speak from "../assets/thumbnails/speak.png";
import speakbw from "../assets/thumbnails/speakbw.png";
import saga from "../assets/thumbnails/saga.png";
import sagabw from "../assets/thumbnails/sagabw.png";
import soundsright from "../assets/thumbnails/soundsright.png";
import soundsrightbw from "../assets/thumbnails/soundsrightbw.png";
import ucthrift from "../assets/thumbnails/ucthrift.png";
import ucthriftbw from "../assets/thumbnails/ucthriftbw.png";
import kalah from "../assets/thumbnails/kalah.png";
import kalahbw from "../assets/thumbnails/kalahbw.png";
import creatorhub from "../assets/thumbnails/creatorhub.png";
import creatorhubbw from "../assets/thumbnails/creatorhubbw.png";
import vroomin from "../assets/thumbnails/vroomin.png";
import vroominbw from "../assets/thumbnails/vroominbw.png";
import olyverse from "../assets/thumbnails/olyverse.png";
import olyversebw from "../assets/thumbnails/olyversebw.png";
import namcap from "../assets/thumbnails/namcap.png";
import namcapbw from "../assets/thumbnails/namcapbw.png";
import draw from "../assets/cat/draw.webp";
import tv from "../assets/cat/tv.webp";

const codeProjects = [
  {
    name: "speak",
    description: "get feedback for your public speaking",
    image: speak,
    bwimage: speakbw,
    link: "https://github.com/ariyin/speak",
    skills: ["farm", "typescript", "gemini"],
    rotate: "0",
    shift: "0",
  },
  {
    name: "SAGA",
    description:
      "an educational website that teaches computer graphics with ai",
    image: saga,
    bwimage: sagabw,
    link: "https://teach-saga.netlify.app/",
    skills: ["react", "javascript", "three.js", "gemini"],
    rotate: "-1",
    shift: "20",
  },
  {
    name: "SoundsRight",
    description:
      "an app to share songs with friends so they know how great your music taste is",
    image: soundsright,
    bwimage: soundsrightbw,
    link: "https://github.com/uclaacm/stackschool-demo-w24",
    skills: ["pern", "javascript", "spotify"],
    rotate: "2",
    shift: "10",
  },
  {
    name: "UC Thrift",
    description: "a thrifting website for uc students",
    image: ucthrift,
    bwimage: ucthriftbw,
    link: "https://github.com/Monicaaawa/uc-thrift",
    skills: ["mern", "javascript"],
    rotate: "-1",
    shift: "0",
  },
  {
    name: "Kalah",
    description: "aka mancala",
    image: kalah,
    bwimage: kalahbw,
    link: "https://github.com/ariyin/CS32/tree/main/Kalah",
    skills: ["c++"],
    rotate: "2",
    shift: "20",
  },
  {
    name: "naM-caP",
    description: "pac-man but in reverse",
    image: namcap,
    bwimage: namcapbw,
    link: "https://github.com/HHSAPCompSci2021/capstoneproject-capstone-desiree-brianna-jenna-idk",
    skills: ["java"],
    rotate: "-0.8",
    shift: "10",
  },
];

const uiProjects = [
  {
    name: "vroomin",
    description:
      "a user experience designed to help facilitate campus ridesharing",
    image: vroomin,
    bwimage: vroominbw,
    link: "/vroomin",
    rotate: "1",
    shift: "15",
  },
  {
    name: "CreatorHub",
    description:
      "a platform to connect brands with content creators for advertisement",
    image: creatorhub,
    bwimage: creatorhubbw,
    link: "/creatorhub",
    rotate: "-1",
    shift: "0",
  },
  {
    name: "Olyverse",
    description:
      "a digital experience to engage with fans on all things ancillary to the LA28 games",
    image: olyverse,
    bwimage: olyversebw,
    link: "/olyverse",
    rotate: "0",
    shift: "15",
  },
];

function Projects() {
  useTitle("projects - ");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="px-24 pt-36 pb-6 max-md:px-8 max-md:pt-36 max-md:pb-20">
        <div className="flex items-end gap-5">
          <h1>projects</h1>
          <img src={draw} className="h-28 max-md:hidden" alt="" />
        </div>
        <div className="project-flex">
          {codeProjects.map((projects) => (
            <CodeProject
              key={projects.name}
              name={projects.name}
              date={projects.date}
              description={projects.description}
              image={projects.image}
              bwimage={projects.bwimage}
              link={projects.link}
              skills={projects.skills}
              rotate={projects.rotate}
              shift={projects.shift}
            />
          ))}
        </div>
      </div>
      <section className="px-24 max-md:px-12">
        <div className="flex items-end justify-between">
          <img src={tv} className="h-48 max-md:hidden" alt="" />
          <h1 style={{ maxInlineSize: "500px", wordWrap: "break-word" }}>
            proto&shy;types
          </h1>
        </div>
        <div className="project-flex">
          {uiProjects.map((projects) => (
            <UIProject
              key={projects.name}
              name={projects.name}
              date={projects.date}
              description={projects.description}
              image={projects.image}
              bwimage={projects.bwimage}
              link={projects.link}
              rotate={projects.rotate}
              shift={projects.shift}
            />
          ))}
        </div>
      </section>
      <h3 className="my-24 flex w-screen justify-center">
        ... and more to come! ^^
      </h3>
    </>
  );
}

export default Projects;
