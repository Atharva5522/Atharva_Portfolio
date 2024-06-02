import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <div className="contact_section">
        <div className="fill">
        <h1>Contact <span>ME!</span></h1>
          <div className="ollist">
            <ul>
            <a href="https://www.linkedin.com/in/atharva-singh-rajput-a7a3b5279/"><li><FaLinkedin /></li></a>
            <a href="https://github.com/Atharva5522"><li><FaSquareGithub /></li></a>
            <a href="https://www.instagram.com/mr.atharva_singh_rajput/"><li><FaInstagramSquare /></li></a>
            <a href="https://www.facebook.com/atharvasingh.rajput.31/"><li><FaFacebook /></li></a>
             <a href="live:.cid.885d9ac207639d76"><li><FaSkype /></li></a>
             <a href="https://vercel.com/atharva-singh-rajputs-projects?q=sky&sort=default&view=grid"><li><IoLogoVercel /></li></a>
              
            </ul>
          </div>
          <div className="link">
          <ul>
            <li><FaPhoneAlt /> 9399554213</li>
            <li><IoIosMail /> atharvasinghrajput17@gmail.com</li>
          </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
