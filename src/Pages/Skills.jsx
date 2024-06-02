import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import icon from "../assets/material_icon.png"
import { FaNodeJs } from "react-icons/fa";

const Skills = () => {
  return (
    <div>

    <div className="skill_section">

    <h1>Skills</h1>
      <div className="list_one">
        <ul>
          <div className="box_1">
          <li><FaHtml5/></li>
          <p>HTML</p>
          </div>
          <div className="box_2"><li><FaCss3Alt /><p>CSS</p></li></div>
          <div className="box_3"><li><TbBrandJavascript /><p>JAVASCRIPT</p></li></div>
          <div className="box_4"><li><FaReact /><p>REACT</p></li></div>
          
        </ul>
      </div>

      <div className="list_two">
        <ul>
          
          <div className="boxx_1"><li><SiRedux /><p>REDUX</p></li></div>
          <div className="boxx_2"><li><FaBootstrap /> <p>BOOTSTRAP</p> </li></div>
          <div className="boxx_3"><li><img src={icon} alt="" /> <p>MATERIAL UI</p> </li></div>
          <div className="boxx_4"><li><FaNodeJs /><p>NODE JS</p></li></div>
        </ul>
      </div>
    </div>

    
      
    </div>
  )
}

export default Skills
