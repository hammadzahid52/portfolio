import Nike from "../assets/Nike-Clone.jpeg";
import Raouf from "../assets/ecom.webp";
import ProBox from "./Probox.jsx";
import Chatapp from "../assets/chatapp.png";
import fitlife from "../assets/fitlife.jpeg";
import cryptoverse from "../assets/cryptoverse.png";
import '../App.css';


function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              

                <ProBox
                title="Ecommerce"
                date="(December 2022)"
                img={Raouf}
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="React"
                techno2="Vanila CSS"
                code="https://github.com/hammadzahid52/Swift-Cart.git"
                demo="https://swift-cart-taupe.vercel.app/"
                scrollY="-71%"
                cName="reversed-proj"
              />


              <ProBox
                title="Chat App"
                img={Chatapp}
                date="(February 2023)"
                description="Chat Pulse - Your Real-time Chat Companion! 💬🚀
                Instantly connect with friends and colleagues, exchange messages, share files, and stay in sync with Chat Pulse. Your go-to chat app for seamless communication."
                
                techno1="MERN Stack"  
                techno2="Web Sockets"
                code="https://github.com/hammadzahid52/MERN-ChatApp.git"
                demo="https://github.com/hammadzahid52/MERN-ChatApp.git"
                scrollY="-83%"
              />

              <ProBox
                title="FitLife"
                date="(February 2023)"
                img={fitlife}
                description="A sleek fitness app to elevate your health journey. 🏋️‍♂️📱
                Track workouts, manage nutrition, and stay motivated. Your path to a healthier you begins with FitLife. 💪🥗"
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/hammadzahid52/FitLife.git"
                demo="https://fitlife-main.netlify.app/"
                scrollY="-74%"
                icon="🪙"
                cName="reversed-proj"
              />

              <ProBox
                title="Nike Clone"
                date="(March 2023)"
                img={Nike}
                description="Created Nike Clone using React and Tailwind CSS."
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/hammadzahid52/Nike-Clone.git"
                demo="https://nike-clone-tailwindcss.netlify.app/"
                scrollY="-89%"
              />

                <ProBox
                title="CryptoVerse"
                date="(July 2023)"
                img={cryptoverse}
                description="Creatd CryptoVerse Web Application showing real time information about the crypto."
                techno1="React"
                techno2="recharts"
                techno3="coingecko api"
                code="https://github.com/hammadzahid52/crypto-bucks"
                demo="https://crypto-bucks-one.vercel.app/"
                scrollY="-89%"
              />

              
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Projects;
