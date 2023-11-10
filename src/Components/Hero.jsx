
import '../App.css';
import Waving from "../assets/waving.png";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html",
    id: 1
  },
  {
    img: "https://skillicons.dev/icons?i=css",
    id: 2
  },
  {
    img: "https://skillicons.dev/icons?i=js",
    id: 3
  },
  {
    img: "https://skillicons.dev/icons?i=react",
    id: 4
  },
  {
    img: "https://skillicons.dev/icons?i=nodejs",
    id: 5
  },
  {
    img: "https://skillicons.dev/icons?i=express",
    id: 6
  },
  {
    img: "https://skillicons.dev/icons?i=mongodb",
    id: 7
  },
  {
    img: "https://skillicons.dev/icons?i=tailwind",
    id: 8
  }
];

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-End React Developer</h1>
                <img src={Waving} alt="waving_hand" />
                <p>
                  Hi, I'm Hammad Zahid. A passionate Full Stack Developer based in Pakistan.
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/hammad-fullstack-dev/"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/hammadzahid52"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            
            


            <div className="skills">
              <p>Tech Stack</p>
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
            </div>  
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
