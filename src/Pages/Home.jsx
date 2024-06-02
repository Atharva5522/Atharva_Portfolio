import mens_img from "../assets/mens_img.webp"
import resume from "../assets/resume.jpg"
import About from "./About"
import Project from "./Project"
import Skills from "./Skills"
import Contact from "./Contact"

const Home = () => {
  return (
    <div>

    <div className="hero_section">
        <div className="left_section">
            <h1>Hello, <br /> I am <span>Atharva Singh Rajput</span></h1>
            <h3>Frontend Developer</h3>
            <p>I am a Web Developer with extensive experiences for over 8 months. <br />
               expertise is to create dynamic websities, website design, Frontend <br />
            Design, and many more...</p>

            <a href={resume}><button>Download CV</button></a>
        </div>
        <div className="right_section">
            <img src={mens_img} alt="" />
        </div>
    </div>

    <About/>
    <Skills/>
    <Project/>
    <Contact/>
      
    </div>
  )
}

export default Home
