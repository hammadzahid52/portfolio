import AboutImg from "../assets/about-img.webp";
import RoundedText from "../assets/rounded-text.svg";
import WorkingEmoji from "../assets/working-emoji.png";
import '../App.css';

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A dedicated .NET Developer
              </h4>
              <p>
                MERN Stack Developer experienced with a diverse background in testing and web application development. Demonstrated ability to wear multiple hats and contribute across the entire stack. Skilled in adapting to changes in technology and life, with a passion for continuous learning.
                <br />
                Proficient in web application development, specializing in front-end bug fixing, API endpoint integration, and backend issue resolution. Committed to delivering high-quality results, have a can-do attitude, team player and continuously enhancing skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;